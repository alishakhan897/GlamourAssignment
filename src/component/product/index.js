import React, { Component } from 'react'
import Navbar from '../Navbar'
import ProductDesign from '../ProductUi'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import { GiClothes } from "react-icons/gi";
import { GiDelicatePerfume } from "react-icons/gi";
import { FaBagShopping } from "react-icons/fa6"
import { BsWatch } from "react-icons/bs"
import { GiLoincloth } from "react-icons/gi"
import { GiSonicShoes } from "react-icons/gi"
import { GiHeartNecklace } from "react-icons/gi"
import { GiLipstick } from "react-icons/gi"
import { FaSearch } from "react-icons/fa"
import { ProductMainDiv, CategoryDiv, ProductSection, SearchDiv, Input, IconDiv , ProductUl , Empty  , SmallEmptyDiv, ImageEmpty , Noresult , BuutonNoResult} from './styledComponent'
import CategoryHalf from '../Category'

const categoryOptions = [
    {
        name: 'Clothing',
        categoryId: '1',
        icon: <GiClothes size={30} color={'#bf7a7f'} />
    },
    {
        name: 'Makeup',
        categoryId: '2',
        icon: <GiLipstick size={30} color={'#bf7a7f'} />
    },
    {
        name: 'Perfumes',
        categoryId: '3',
        icon: <GiDelicatePerfume size={30} color={'#bf7a7f'} />
    },
    {
        name: 'Handbags',
        categoryId: '4',
        icon: <FaBagShopping size={30} color={'#bf7a7f'} />
    },
    {
        name: 'Watches',
        categoryId: '5',
        icon: <BsWatch size={30} color={'#bf7a7f'} />
    },
    {
        name: 'Abaya',
        categoryId: '6',
        icon: <GiLoincloth size={30} color={'#bf7a7f'} />
    },
    {
        name: 'Footwear',
        categoryId: '7',
        icon: <GiSonicShoes size={30} color={'#bf7a7f'} />
    },
    {
        name: 'Jewellery',
        categoryId: '8',
        icon: <GiHeartNecklace size={30} color={'#bf7a7f'} />
    },
]

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}

class Product extends Component {
    state = { ProductItem: [], apiStatus: apiStatusConstants.initial  , search:'' , categoryid:'' , allProduct:[]}

    componentDidMount() {
        this.getProductDetails2()
    }

    getProductDetails2 = async () => {
        const {search , categoryid} = this.state
        const url = `https://fashionwebbackend.onrender.com/products?subTitle=${search}&categoryid=${categoryid}`;
        const options = {
            method: 'GET',
        };
        this.setState({apiStatus:apiStatusConstants.in_progress})
        const response = await fetch(url, options)

        if (response.ok === true) {
            const data = await response.json()
         
            const UpdatedData = data.map((each) => ({
                id: each._id,
                title: each.title,
                imageUrl: each.image_url,
                subTitle:each.subTitle
            }))
            this.setState({ ProductItem: UpdatedData, apiStatus: apiStatusConstants.success })
          
        }
        else {
            this.setState({ apiStatus: apiStatusConstants.failure })
        }
    }

    inputSearch = event => {
        this.setState({search:event.target.value})
    }


    iconClick = async() => {
        const { search, categoryid } = this.state;
        if (categoryid && !search) {
            // Remove category filter
            await this.setState({ categoryid: '' });
        }
        this.getProductDetails2()
        this.setState({search:""})  
    }
    
    ClickIcon = async (id) => {
        await this.setState({ categoryid: id });
        this.getProductDetails2();
    }

    Shopping = async() => {
        const { search, categoryid } = this.state;
        if (categoryid && !search) {
            // Remove category filter
            await this.setState({ categoryid: '' });
        }
        this.getProductDetails2()
        this.setState({search:""})  
    }

    renderLoadingView = () => (
        <div data-testid="loader">
            <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </div>
    )

    renderFailureView = () => (
        <div className="product-details-error-view-container">
            <img
                alt="error view"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
                className="error-view-image"
            />
            <h1 className="product-not-found-heading">Product Not Found</h1>
            <Link to="/products">
                <button type="button" className="button">
                    Continue Shopping
                </button>
            </Link>
        </div>
    )

    renderSuccessView = () => {
        const { ProductItem} = this.state
        const Length = ProductItem.length > 0


        return (
            <ProductUl>
              {Length ? (
                ProductItem.map((each) => (
                  <ProductDesign
                    key={each.id}  // Make sure to add a unique key
                    ProductItemDetail={each}
                  />
                ))
              ) : (
                <Empty>
                    <SmallEmptyDiv>
                    <ImageEmpty src="https://res.cloudinary.com/alishakhan987/image/upload/v1710346940/undraw_empty_re_opql_shefvw.svg"/>
                <Noresult>No Result Found</Noresult> 
                <BuutonNoResult onClick={this.Shopping}>Continue Shopping</BuutonNoResult>
                </SmallEmptyDiv>
                </Empty>
              )}
            </ProductUl>
          );
          
    }

    renderProductDetails = () => {
        const { apiStatus } = this.state

        switch (apiStatus) {
            case apiStatusConstants.success:
                return this.renderSuccessView()
            case apiStatusConstants.failure:
                return this.renderFailureView()
            case apiStatusConstants.inProgress:
                return this.renderLoadingView()
            default:
                return null
        }
    }

    render() {
       
       const {search} = this.state
        return (
            <div>
                <Navbar />
                <ProductMainDiv>
                    <CategoryDiv>
                        {categoryOptions.map((each) => <CategoryHalf 
                        categoryDetail={each} 
                        key={each.id}
                        ClickIcon = {this.ClickIcon}
                        />)}
                    </CategoryDiv>
                    <ProductSection>
                        <SearchDiv>
                            <Input placeholder="Search" onChange={this.inputSearch} value={search} type="search"/>
                            <IconDiv>
                                <FaSearch size={20} onClick={this.iconClick}/>
                            </IconDiv>
                        </SearchDiv>
                    {this.renderProductDetails()}
                    </ProductSection>
                </ProductMainDiv>
            </div>
        )
    }
}

export default Product