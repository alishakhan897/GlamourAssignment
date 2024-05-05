import React , {Component} from 'react';
import { Popup } from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

import { MainAddDiv, SmallAddDiv, HeadingAdd, FormAdd, InputAdd, TextArea, Buttondiv, Button , Selected } from './styledComponent';

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',

}
const categoryOptions = [
    {
        name: 'Clothing',
        categoryId: '1',
    },
    {
        name: 'Makeup',
        categoryId: '2',
    },
    {
        name: 'Perfumes',
        categoryId: '3',
    },
    {
        name: 'Handbags',
        categoryId: '4',
    },
    {
        name: 'Watches',
        categoryId: '5',
    },
    {
        name: 'Abaya',
        categoryId: '6',
    },
    {
        name: 'Footwear',
        categoryId: '7',
    },
    {
        name: 'Jewellery',
        categoryId: '8',
      },
]




class ProductDetailUser extends Component {
    state = { image_url: '', title: '', description: '', showFailureMessage: false, 
    showSuccessMess: false, apiStatus: apiStatusConstants.initial, subTitle:'' , rating:''
     , categoryid:categoryOptions[0].categoryId ,  availability:'' , price:''}

    imageUrl = (event) => {
        this.setState({ image_url: event.target.value })
    }


    Title = event => {
        this.setState({ title: event.target.value })
    }

    Description = event => {
        this.setState({ description: event.target.value })
    }

    subtitle = event => {
        this.setState({subTitle : event.target.value})
    }

    Rating = event => {
        this.setState({rating:event.target.value})
    }

    CategoryChange = event => {
        this.setState({categoryid:event.target.value})
    }

    Available = event => {
        this.setState({availability:event.target.value})
    }

    Price = event => {
        this.setState({price:event.target.value})
    }

    formSubmit = async (event) => {
        event.preventDefault();
        const { image_url, title, description , subTitle , rating , categoryid , availability , price} = this.state;
        const AddProductDetails = { image_url, title, description  , subTitle , categoryid , availability , rating , price};
    
        const url = 'https://fashionwebbackend.onrender.com/products';
        const options = {
            method: 'POST',
            body: JSON.stringify(AddProductDetails),
            headers: {
                'Content-Type': 'application/json',
            },
        };
    
        try {
            const response = await fetch(url, options);
    
            if (response.ok) {
                const data = await response.json();
                this.setState({
                    apiStatus: apiStatusConstants.success,
                    showSuccessMess: true,
                    image_url: '',
                    title: '',
                    description: '',
                    availability:'',
                    rating:'',
                    subTitle:'',
                    price:''
                });
            } else {
                this.setState({ apiStatus: apiStatusConstants.failure, showFailureMessage: true });
                console.error('Failed to fetch:', response.statusText);
            }
        } catch (error) {
            this.setState({ apiStatus: apiStatusConstants.failure, showFailureMessage: true });
            console.error('Error during fetch:', error);
        }
    };
    render() {
        const {apiStatus , image_url , rating , categoryid , description , subTitle, availability , price , title} = this.state
        return (
            <MainAddDiv>
                <SmallAddDiv>
                    <HeadingAdd>Enter Your Product Details</HeadingAdd>
                    <FormAdd onSubmit={this.formSubmit}>
                        <label>IMAGEURL</label>
                        <InputAdd type="text" onChange={this.imageUrl} value={image_url}/>
                        <label>TITLE</label>
                        <InputAdd type="text" onChange={this.Title} value={title} /> 
                        <label>DESCRIPTION</label>
                        <TextArea type="text" rows="4" cols="50" onChange={this.Description} value={description}/>
                        <label>SUB TITLE</label>
                        <InputAdd type="text" onChange={this.subtitle} value={subTitle}/>
                        <label>Rating</label>
                        <InputAdd type="text" onChange={this.Rating} value={rating} />
                        <label>Category</label>
                       <Selected value={categoryid} onChange={this.CategoryChange}>
                        {categoryOptions.map((each)=> (
                            <option key={each.categoryId} value={each.categoryId}>{each.name}</option>
                        ))}
                       </Selected>
                       <label>AVAILABILITY</label>
                        <InputAdd type="text" onChange={this.Available} value={availability} />
                        <label>PRICE</label>
                        <InputAdd type="text" onChange={this.Price} value={price} />
                        <Buttondiv>

                            <Popup
                                modal
                                trigger={<Button type="submit">Submit</Button>}
                            >
                                {close => (
                                    <>
                                        <div>
                                            {apiStatus === apiStatusConstants.success ? (
                                                <p>Success! Your product has been added.</p>
                                            ) : (
                                                <p>Oops! Something went wrong. Please try again later.</p>
                                            )}
                                        </div>
                                        <button
                                            type="button"
                                            className="trigger-button"
                                            onClick={() => close()}
                                        >
                                            Close
                                        </button>
                                    </>
                                )}
                            </Popup>
                        </Buttondiv>
                    </FormAdd>

                </SmallAddDiv>

            </MainAddDiv>
        )
    }
}

export default ProductDetailUser