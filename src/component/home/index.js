import React, { Component } from 'react';
import Cookies from 'js-cookie'
import { Redirect, Link } from 'react-router-dom'
import Navbar from '../Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner'
import { FaGithub } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa"
import { MdCollections } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6"
import {
    HomePageMainContainer, Collection, HeadingElem, ParaElem, CollectionHeading, CollectionSmallCard, CardContainer, CardImage, CardContent,
    SecondCollection, SecondCollection2, TopContainer, MakeCenter, WhyChooseusmain,
    WhyChooseSmallContainer, Div1, Div1Shopping, Iconbackground, IconPara1, IconPara2, LabelForm, InputForm,CopyrightContainer,
    Div2, WhyChooseHeading, LandingPageMain, LogoImage, LandingPageDiv, ContactUsDiv, ContactFrom, ContactHaeding, DescriptionDiv, PutLableForm, ContactSubmitButton, LogoDiv, TitleDiv, ErrText, FooterSection, FooterSmallDiv, ButtonFooter, Span, Bg, LastPage, SecondLastPage
} from './styledComponent';


const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}


class Home extends Component {

    state = { product: [], apistatus: apiStatusConstants.initial, name: '', email: '', message: '', showErr: false, err: '' }

    componentDidMount() {
        this.getProductRoute()
    }

    getProductRoute = async () => {
        const url = "https://fashionwebbackend.onrender.com/addproducts"
        this.setState({
            apiStatus: apiStatusConstants.inProgress,
        })
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        }

        const response = await fetch(url, options)

        if (response.ok === true) {
            const data = await response.json()
            const UpdatedData = data.map((each) => ({
                id: each._id,
                imageUrl: each.image_url,
                title: each.title,
                description: each.description
            }))

            this.setState({ product: UpdatedData, apiStatus: apiStatusConstants.success })

        }
        else {
            this.setState({ apiStatus: apiStatusConstants.failure })
        }

    }

    OnSubmitSuccess = () => {
        this.setState({ showErr: false, err: '' });
        toast("Feel Free to reach us")
    }

    OnSubmitFailure = (error) => {
        this.setState({ showErr: true, err: error })
        toast("Something Went wrong")
    }
    ContactFormsub = async (event) => {
        event.preventDefault();
        const { name, email, message } = this.state;
        const contactDetails = { name, email, message };
        const apiUrl = "https://fashionwebbackend.onrender.com/contact";
        const options = {
            method: "POST",
            body: JSON.stringify(contactDetails),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await fetch(apiUrl, options);
            const data = await response.json();

            if (response.ok === true) {
                this.setState({ name: '', email: '', message: '' });
                this.OnSubmitSuccess();
            } else {
                this.OnSubmitFailure(data.error);
            }
        } catch (error) {
            console.error(error);
            this.OnSubmitFailure('Internal Server Error');
        }
    };



    NameField = event => {
        this.setState({ name: event.target.value })
    }

    EmailField = event => {
        this.setState({ email: event.target.value })
    }

    Description = event => {
        this.setState({ message: event.target.value })
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
        const { product } = this.state

        return (
           <>
                    {product.map((each) => (
                        <>
                            <CardContainer key={each.id}>
                                <CardImage src={each.imageUrl} alt="product" />
                                <CardContent>
                                    <p className="heading">{each.title}</p>
                                    <p className="para">{each.description}</p>
                                </CardContent>
                            </CardContainer>
                        </>
                    ))}

</>
        )
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
        const { name, email, message, showErr, err } = this.state
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken === undefined) {
            return <Redirect to="/login" />
        }
        return (
            <>
                <Navbar />
                <HomePageMainContainer>
                    <TopContainer>
                        <HeadingElem>TREND ALERT!!</HeadingElem>
                        <ParaElem>Discover the latest trends that resonate with your personality. Whether it's bold prints, classic monochromes, or a fusion of both, find your signature look that speaks volumes
                            without saying a word </ParaElem>
                    </TopContainer>
                </HomePageMainContainer>
                <Collection>
                <CollectionHeading>Our Collections</CollectionHeading>
                <CollectionSmallCard>
               
                {this.renderProductDetails()}
                </CollectionSmallCard>
                </Collection>
               
                <SecondCollection>
                    <SecondCollection2>
                        <MakeCenter>
                            <h1>Elegance is the only beauty that never fades</h1>
                            <p>Elegance is the timeless essence that transcends the fleeting trends
                                of fashion, embodying a beauty that endures through the ages. It is a quality
                                that speaks to the refinement and sophistication inherent in simplicity. Much
                                like a classic piece of art, elegance is never bound by the constraints of
                                passing fads; instead, it stands as a testament to enduring allure</p>
                        </MakeCenter>
                    </SecondCollection2>
                </SecondCollection>
                <WhyChooseusmain>
                    <WhyChooseHeading>Why Choose Us?</WhyChooseHeading>
                    <WhyChooseSmallContainer>
                        <Div1>
                            <Div1Shopping>
                                <Iconbackground>
                                    <FaShoppingBag size={30} color={'#bf7a7f'} />
                                </Iconbackground>
                                <TitleDiv>
                                    <IconPara1>Personalized Shopping Experience</IconPara1>
                                    <IconPara2>We understand that every fashion journey is unique. Our user-friendly interface and personalized
                                        recommendations make your shopping experience seamless, enjoyable, and tailored to your preferences</IconPara2>
                                </TitleDiv>
                            </Div1Shopping>
                            <Div1Shopping>
                                <Iconbackground>
                                    <MdCollections size={30} color={'#bf7a7f'} />
                                </Iconbackground>
                                <TitleDiv>
                                    <IconPara1 >Discover exclusive pieces available </IconPara1>
                                    <IconPara2 > Our limited-edition collections are carefully curated to bring you distinctive and one-of-a-kind
                                        fashion that sets you apart from the crowd fashion that sets you apart from the crowd.</IconPara2>
                                </TitleDiv>
                            </Div1Shopping>

                        </Div1>
                        <Div2>
                            <LogoDiv>
                                <LogoImage src="https://res.cloudinary.com/alishakhan987/image/upload/v1710012345/enhanced-image__18_-removebg-preview_uqvkms.png" alt="logo" />
                            </LogoDiv>
                        </Div2>
                        <Div1>
                            <Div1Shopping>
                                <Iconbackground>
                                    <TiTick size={30} color={'#bf7a7f'} />
                                </Iconbackground>
                                <TitleDiv>
                                    <IconPara1>Unrivaled Quality</IconPara1>
                                    <IconPara2>Our commitment to excellence is woven into every fabric we offer. Impeccable craftsmanship and attention to detail ensure
                                        that each piece you choose from Glamour Groove is a testament to enduring quality</IconPara2>
                                </TitleDiv>
                            </Div1Shopping>
                            <Div1Shopping>
                                <Iconbackground>
                                    <FaArrowTrendUp size={30} color={'#bf7a7f'} />
                                </Iconbackground>
                                <TitleDiv>
                                    <IconPara1>Trendsetting Designs </IconPara1>
                                    <IconPara2>  Stay ahead of the curve with our fashion-forward designs.
                                        From timeless classics to the latest trends, our curated collections cater to diverse tastes,
                                        ensuring you'll find something that resonates with your unique style.</IconPara2>
                                </TitleDiv>
                            </Div1Shopping>
                        </Div1>
                    </WhyChooseSmallContainer>
                </WhyChooseusmain>
                <LandingPageMain>
                    <LandingPageDiv>
                        <ContactUsDiv>
                            <ContactHaeding>Contact Us</ContactHaeding>
                            <ContactFrom onSubmit={this.ContactFormsub}>
                                <PutLableForm>
                                    <LabelForm htmlFor='Name'>Name</LabelForm>
                                    <InputForm type="text" id="Name" placeholder="Enter Your Name" onChange={this.NameField} value={name} />
                                </PutLableForm>
                                <PutLableForm>
                                    <LabelForm htmlFor="Email" >Email</LabelForm>
                                    <InputForm type="text" id="Email" placeholder="Enter Your Email" onChange={this.EmailField} value={email} />
                                </PutLableForm>
                                <PutLableForm>
                                    <LabelForm htmlFor='Description'>Description</LabelForm>
                                    <DescriptionDiv id="Description" type="text" rows={4} cols={50} value={message} placeholder="Enter Your Message" onChange={this.Description}></DescriptionDiv>
                                </PutLableForm>

                                <PutLableForm>

                                    <ContactSubmitButton type="submit">Submit</ContactSubmitButton>
                                    <ToastContainer />
                                </PutLableForm>

                                {showErr && <ErrText>{err}</ErrText>}
                            </ContactFrom>
                        </ContactUsDiv>

                    </LandingPageDiv>

                </LandingPageMain>
                <FooterSection>
                    <FooterSmallDiv>
                        <ButtonFooter>
                            <Span>
                                <a href="https://github.com/alishakhan897" target="_blank" rel="noopener noreferrer">
                                    <FaGithub fill="white" height="1.8em" size={30} />
                                </a>
                            </Span>
                            <Bg></Bg>

                        </ButtonFooter>
                        <ButtonFooter>
                            <Span>
                                <a href="https://www.linkedin.com/in/miss-alisha-khan-/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram fill="white" height="1.8em" size={30} />
                                </a>
                            </Span>
                            <Bg></Bg>

                        </ButtonFooter>
                        <ButtonFooter>
                            <Span>
                                <a href="https://www.linkedin.com/in/miss-alisha-khan-/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin fill="white" height="1.8em" size={30} />
                                </a>
                            </Span>
                            <Bg></Bg>

                        </ButtonFooter>
                    </FooterSmallDiv>

                </FooterSection>
                <LastPage>
                    <SecondLastPage>
                        <CopyrightContainer>
                      CopyRight | <FaRegCopyright />2024 Designed by Alisha Khan </CopyrightContainer>  
                    </SecondLastPage>
                </LastPage>
            </>
        )
    }

}

export default Home 