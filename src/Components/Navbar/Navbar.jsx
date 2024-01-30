import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import cart_icon from '../Assets/Ecommerce_Frontend_Assets/Assets/cart_icon.png'
import logo from '../Assets/Ecommerce_Frontend_Assets/Assets/logo.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import drop_down_icon from '../Assets/Admin Panel Assets/arrow_icon.svg'
import './navbar.css'

export const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const [show, setShow] = useState("false")
    const {getTotalCartItems} = useContext(ShopContext)
    // const menuRef = useRef()

    //function that hides the nav menu
    const dropDownToggle = (e) =>{
        // menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
        show === "false" ? setShow("true") : show === "true" && setShow("false")
        console.log(show)
    }
  return (
    <NavbarDiv>
        <NavLogo>
            <img src={logo} alt='logo'/>
            <p>SHOPPER</p>
        </NavLogo>
        <DropImg className='nav-dropdown' onClick={dropDownToggle} src={drop_down_icon} alt='drop_down'/>
        <NavMenu shows={show}>
            <NMList onClick={() => {setMenu("shop")}}> 
                <Link style={{textDecoration: 'none'}} to={'/'}>
                    Home
                </Link> {menu === "shop" && (<hr/>)} 
            </NMList>
            <NMList onClick={() => {setMenu("categories")}}>
                <Link style={{textDecoration: 'none'}} to={'/categories'}>
                    Categories
                </Link> {menu === "categories" && (<hr/>)}
            </NMList>
            <NMList onClick={() => {setMenu("about")}}>
                <Link style={{textDecoration: 'none'}} to={'/about'}>
                    About Us
                </Link>  {menu === "about" && (<hr/>)}
            </NMList>
            <NMList onClick={() => {setMenu("contact")}}>
                <Link style={{textDecoration: 'none'}} to ={'contact'}>
                    Contact Us 
                </Link> {menu === "contact" && (<hr/>)}
            </NMList>
        </NavMenu>
        <NavCart>
            {/* <Butt> 
                <Link style={{textDecoration: 'none'}} to={'/login'}>
                    Login
                </Link>
            </Butt> */}
            <Link style={{textDecoration: 'none'}} to={'/cart'}>
                <img src = {cart_icon} alt='cart_logo'/>
            </Link>
            <CartCounter>{getTotalCartItems()}</CartCounter>
        </NavCart>
    </NavbarDiv>
  )
}

const NavbarDiv = styled.div`
   display: flex;
   justify-content: space-around;
   padding: 16px;
   box-shadow: 0 1px 3px -2px black;
   @media(max-width: 1280px) {
    padding: 12px 50px;
   }
   @media(max-width: 1024px){
       padding: 12px 30px;
   }
   @media(max-width:800px) {
        padding: 10px 0px;
        justify-content: space-around;
   }
   @media(max-width:500px) {
    padding: 0px 0px;
    gap: 0;
   }
`
const NavLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    p {
        color: #171717;
        font-size: 38px;
        font-weight: 600;
    }
    @media(max-width: 1280px) {
        img {
            width: 40px;
        }
        p {
            font-size: 25px;
        }
    }
    @media (max-width: 500px){
        transform: scale(0.8);
        p {
            display: none;
        }
    }
`
const NavMenu = styled.ul`
        display: flex;
        align-items: center;
        list-style: none;
        gap: 50px;
        color: #626262;
        font-size: 20px;
        font-weight: 500;
    @media(max-width: 1280px){
        gap: 30px;
        font-size: 16px;
    }
    @media(max-width: 1024px){
     gap: 25px;
     font-size: 14px;   
    }
    @media(max-width: 800px) {
        display: ${props => props.show === "true" ? 'flex' : props.shows === 'false' && 'none'};
        height: 80px;
        width: 100%;
        position: absolute;
        background-color: white;
        justify-content: center;
        top: 60px;
    }
    @media (max-width: 500px) {
        height: 70px;
        top: 60px;
    }
    
`
const DropImg = styled.img`
    
`
const NMList = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    cursor: pointer;
    hr {
        border: none;
        width: 80px;
        height: 3px;
        border-radius: 10px;
        background: #FF4141;
        transition: 2s;
    }
`
const NavCart = styled.div`
    display: flex;
    align-items: center;
    gap: 45px;
    @media(max-width: 1280px){
        gap: 30px;
    }
    @media(max-width: 1024px){
     width: 30px;   
    }
    @media(max-width:800px){
        width: 15px;
    }
`
// const Butt = styled.button`
//     width: 157px;
//     height: 58px;
//     outline: none;
//     border: 1px solid #7a7a7a;
//     border-radius: 75px;
//     color: #515151;
//     font-size: 20px;
//     font-weight: 500;
//     background: #fff;
//     cursor: pointer;

//     &:active{
//         background: #f3f3f3;
//     }
//     @media(max-width: 1280px){
//         width: 120px;
//         height: 45px;
//         font-size: 16px;
//     }
//     @media(max-width: 1024px){
//      width: 80px;
//      height: 35px;
//      font-size: 14px;
//     }
//     @media (max-width:800px) {
//         width: 60px;
//         height: 30px;
//         font-size: 12px;
//     }

// `
const CartCounter = styled.div`
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -35px;
    margin-left: -55px;
    border-radius: 11px;
    font-size: 14px;
    background: red;
    color: white;
    @media(max-width: 1280px){
        margin-left: -40px;
        font-size: 12px;
    }
    @media(max-width: 1024px){
        width: 18px;
        height: 18px;
    }

`
