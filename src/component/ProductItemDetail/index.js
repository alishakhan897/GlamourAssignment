import React, { Component } from 'react';
import Navbar from '../Navbar';
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner'
import CartContext from '../../Context/CartContext';
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'

import {
    StyledMainDiv, ImageDetailed, Imageheight, DetailedMainDiv,
    DetailedContainer, Rspara, ButtonDiv, ButtonDetailed, Des, AvailablePara, BsDesign, Button2, SimiliarProductDiv, ImageDetailed2, Imageheight2 , HeadingDiv
} from './styledComponent';

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}

class ProductDeatils extends Component {
    state = { Details: {}, count: 1, apiStatus: apiStatusConstants.initial, similiarProducts: [] }

    componentDidMount() {
        this.getDetailedProduct()
    }

    getDetailedProduct = async () => {
        const { similiarProducts } = this.state
        const { match } = this.props
        const { params } = match
        const { id } = params

        this.setState({
            apiStatus: apiStatusConstants.inProgress,
        })
        const jwtToken = Cookies.get('jwt_token')
        const url = `https://fashionwebbackend.onrender.com/products/${id}`
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        }
        const response = await fetch(url, options)

        if (response.ok === true) {
            const data = await response.json()
            const UpdatedData = {
                id: data.id,
                categoryid: data.categoryid,
                description: data.description,
                title: data.title,
                subTitle: data.subTitle,
                imageUrl: data.image_url,
                price: data.price,
                rating: data.rating,
                Availability: data.availability,
            }
         
            const UpdatedSimilarProduct = data.similar_products.map((each) => ({
                imageUrl: each.image_url,
                id:each.id
            }))


            this.setState({ Details: UpdatedData, apiStatus: apiStatusConstants.success, similiarProducts: UpdatedSimilarProduct })
        }
        else {
            this.setState({ apiStatus: apiStatusConstants.failure })
        }

    }

    ImageClicked = id => {
        this.getDetailedProduct(id)
    }


    renderLoadingView = () => (
        <div className="products-details-loader-container" data-testid="loader">
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



    add = () => {
        this.setState(prev => ({ count: prev.count + 1 }))
    }

    sub = () => {
        this.setState(prev => ({ count: Math.max(prev.count - 1, 1) }))
    }

    renderProductDetailsView = () => (
        <CartContext.Consumer>
            {value => {
                const { Details, count } = this.state
                const { title, imageUrl, price, Availability, description, rating , id } = Details
              //  console.log(Details)
                const { addCartItem } = value

                const onClickAddToCart = (id) => {
                    addCartItem({ ...Details, count })
                    toast("Item Added in your cart Successfully Proceed to buy")
                    console.log(id)

                }

                return (


                    <>
                        <StyledMainDiv>
                          
                            <ImageDetailed>
                                <Imageheight src={imageUrl} alt={imageUrl} />
                            </ImageDetailed>
                            <DetailedContainer>
                                <h1>{title}</h1>
                                <Rspara> Rs {price}/-</Rspara>
                                <ButtonDiv>
                                    <ButtonDetailed>
                                        {rating}
                                        <FaStar />
                                    </ButtonDetailed>
                                </ButtonDiv>
                                <Des className="des">{description}</Des>
                                <AvailablePara>
                                    Available: <span style={{ color: '#616e7c' }}>{Availability}</span>
                                </AvailablePara>
                                <hr />
                                <BsDesign>
                                    <BsPlusSquare onClick={this.add} data-testid="plus" />
                                    <p>{count}</p>
                                    <BsDashSquare onClick={this.sub} data-testid="minus" />
                                </BsDesign>
                                <Button2 type="button" onClick={onClickAddToCart}>
                                    Add to cart
                                </Button2>
                            </DetailedContainer>



                        </StyledMainDiv>
                    </>
                );
            }}
        </CartContext.Consumer>
    );



    renderProductDetails = () => {
        const { apiStatus } = this.state

        switch (apiStatus) {
            case apiStatusConstants.success:
                return this.renderProductDetailsView()
            case apiStatusConstants.failure:
                return this.renderFailureView()
            case apiStatusConstants.inProgress:
                return this.renderLoadingView()
            default:
                return null
        }
    }


    render() {

        const { similiarProducts } = this.state

        return (

            <>
              <ToastContainer/>
                <Navbar />
                <DetailedMainDiv>
                    {this.renderProductDetails()}
                  

                    <SimiliarProductDiv>
                    <HeadingDiv>
                    <h1>Similar Products </h1>
                    </HeadingDiv>
                        {similiarProducts.map((each) => (
                            <ImageDetailed2 key={each.id}>
                              <Imageheight2 src={each.imageUrl} alt="Similar Product" onClick={() => this.ImageClicked(each.id)} />
                            </ImageDetailed2>
                        ))}
                    </SimiliarProductDiv>

                </DetailedMainDiv>

            </>
        )
    }
}

export default ProductDeatils