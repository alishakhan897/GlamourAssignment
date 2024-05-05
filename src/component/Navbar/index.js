import React, { useState } from 'react';
import Cookies from 'js-cookie'
import { IoIosHome } from "react-icons/io";
import { GiBoxUnpacking } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa"
import { FaUserEdit } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { AiTwotoneShop } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri"
import { withRouter,Link } from 'react-router-dom';
import {
    NavItem, NavDiv, Unorder, Button, Icon, Image, Svg, LinkDes2, ForSmallDiv, ButtonSmall,
    LogoutProfileDiv, ProfileSubDiv, UserProfileDiv, UserHeading, UserProfileDiv2 , UserProfileDivLink
} from './styledComponent'

const Navbar = ({ history }) => {
    const [showProfile, setShowProfile] = useState(false);
    const logout = () => {
        Cookies.remove('jwt_token');
        history.replace('/login');
    };

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };

    const userData = JSON.parse(localStorage.getItem('users'));
    const { username, email } = userData
    return (
        <>
            <NavItem>
                <Image src="https://res.cloudinary.com/alishakhan987/image/upload/v1710012345/enhanced-image__18_-removebg-preview_uqvkms.png" />
                <NavDiv>
                    <Unorder>
                        <LinkDes2 to="/">
                            <li>HOME</li>
                        </LinkDes2>
                        <LinkDes2 to="/product">
                            <li>PRODUCTS</li>
                        </LinkDes2>
                        <LinkDes2 to="/cart">
                            <li>CART</li>
                        </LinkDes2>
                    </Unorder>
                </NavDiv>
                <LogoutProfileDiv>
                    <Button onClick={logout}>
                        Logout
                        <Icon>
                            <Svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"
                                ></path>
                            </Svg>
                        </Icon>
                    </Button>
                    <div onClick={toggleProfile}>
                        <CgProfile size={30} color={"#bf7a7f"} style={{ cursor: 'pointer' }}/>
                    </div>
                    <ButtonSmall>
                        <FiLogOut size={25} color={"#bf7a7f"} onClick={logout} />
                    </ButtonSmall>
                </LogoutProfileDiv>
                {showProfile && (
                    <ProfileSubDiv>
                        <UserProfileDiv>
                            <FaUserCircle color={'white'} size={25} />
                            <UserHeading>{username}</UserHeading>
                        </UserProfileDiv>
                        <UserProfileDiv>
                            <HiOutlineMail color={'white'} size={25} />
                            <UserHeading>{email}</UserHeading>
                        </UserProfileDiv>
                        <hr />
                        <UserProfileDivLink to="/edit-profile">
                            
                            <FaUserEdit color={'white'} size={25} />
                            <UserHeading>Edit Profile</UserHeading>
                            <IoIosArrowForward color={'white'} />
                           
                        </UserProfileDivLink>
                        <UserProfileDivLink>
                            <AiTwotoneShop color={'white'} size={25} />
                            <UserHeading>Upgrade Your Business</UserHeading>
                            <IoIosArrowForward color={'white'} />

                        </UserProfileDivLink>
                        <UserProfileDivLink>
                            <RiAdminFill color={'white'} size={25} />
                            <UserHeading>Admin Panel</UserHeading>
                            <IoIosArrowForward color={'white'} />

                        </UserProfileDivLink>
                    </ProfileSubDiv>
                )}
            </NavItem>
            <ForSmallDiv>
                <LinkDes2 to="/"> <IoIosHome size={20} color={"#bf7a7f"} /> </LinkDes2>
                <LinkDes2 to="/product"> <GiBoxUnpacking size={20} color={"#bf7a7f"} /></LinkDes2>
                <LinkDes2 to="/cart">  <FaShoppingCart size={20} color={"#bf7a7f"} /></LinkDes2>

            </ForSmallDiv>
        </>
    )
}

export default withRouter(Navbar);
