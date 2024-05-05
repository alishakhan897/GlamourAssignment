import React, { Component } from 'react';

import { Popup } from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

import { MainAddDiv, SmallAddDiv, HeadingAdd, FormAdd, InputAdd, TextArea, Buttondiv, Button } from './styledComponent';


const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',

}

class AddForm extends Component {
    state = { image_url: '', title: '', description: '', showFailureMessage: false, showSuccessMess: false, apiStatus: apiStatusConstants.initial, }

    imageUrl = (event) => {
        this.setState({ image_url: event.target.value })
    }


    Title = event => {
        this.setState({ title: event.target.value })
    }

    Description = event => {
        this.setState({ description: event.target.value })
    }

    formSubmit = async (event) => {
        event.preventDefault();
        const { image_url, title, description } = this.state;
        const AddProductDetails = { image_url, title, description };
    
        const url = 'https://fashionwebbackend.onrender.com/add';
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
                    description: ''
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
        const { apiStatus } = this.state;
        return (
            <MainAddDiv>
                <SmallAddDiv>
                    <HeadingAdd>Enter Your Product Details</HeadingAdd>
                    <FormAdd onSubmit={this.formSubmit}>
                        <label>IMAGEURL</label>
                        <InputAdd type="text" onChange={this.imageUrl} />
                        <label>TITLE</label>
                        <InputAdd type="text" onChange={this.Title} />
                        <label>DESCRIPTION</label>
                        <TextArea type="text" rows="4" cols="50" onChange={this.Description} />
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

export default AddForm