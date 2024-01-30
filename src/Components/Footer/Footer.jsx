import React from 'react'
import styled from 'styled-components'
import footer_logo from '../Assets/Ecommerce_Frontend_Assets/Assets/logo_big.png'
import instagram_icon from '../Assets/Ecommerce_Frontend_Assets/Assets/instagram_icon.png'
import pintester_icon from '../Assets/Ecommerce_Frontend_Assets/Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/Ecommerce_Frontend_Assets/Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <FooterDiv>
        <FooterLogo>
            <FooterImg src={footer_logo} alt='footer_logo' />
            <FooterP>SHOPPER</FooterP>
        </FooterLogo>
        <FooterLinks>
            <FooterLink>Company</FooterLink>
            <FooterLink>Products</FooterLink>
            <FooterLink>Offices</FooterLink>
            <FooterLink>About</FooterLink>
            <FooterLink>Contact</FooterLink>
        </FooterLinks>
        <FooterSocials>
            <FooterIconsContainer>
                <img src={instagram_icon} alt="insta_icon" />
            </FooterIconsContainer>
            <FooterIconsContainer>
                <img src={pintester_icon} alt="pintester_icon" />
            </FooterIconsContainer>
            <FooterIconsContainer>
                <img src={whatsapp_icon} alt="whatsapp_icon" />
            </FooterIconsContainer>
        </FooterSocials>
        <FooterCopyright>
            <hr />
            <p>Copyright @2023 - All rights reserved</p>
        </FooterCopyright>
    </FooterDiv>
  )
}

export default Footer

const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
   
    @media(max-width: 800px) {
        gap: 20px;
    }
    
`
const FooterLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    @media(max-width: 1280px){
        
    }
    @media(max-width: 1024px){
      
    }
    @media(max-width: 800px) {
        gap: 10px;
        align-items: end;
    }
    @media (max-width: 500px) {
        
    }
`
const FooterImg = styled.img`
    @media(max-width: 1280px){
        
    }
    @media(max-width: 1024px){
      
    }
    @media(max-width: 800px) {
        width: 40px;
    }
    @media (max-width: 500px) {
        
    }
`
const FooterP = styled.p`
    color: #383838;
    font-size: 46px;
    font-size: 700;

    @media(max-width: 1280px){
        
    }
    @media(max-width: 1024px){
      
    }
    @media(max-width: 800px) {
        font-size: 25px;
    }
    @media (max-width: 500px) {
        
    }
`
const FooterLinks = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
    color: #252525;
    font-size: 20px;
    @media(max-width: 1280px){
        
    }
    @media(max-width: 1024px){
      
    }
    @media(max-width: 800px) {
        font-size: 14px;
        gap: 10px;
    }
    @media (max-width: 500px) {
        
    }
`
const FooterLink = styled.li`
    cursor: pointer;
`
const FooterSocials = styled.div`
    display: flex;
    gap: 20px;
`
const FooterIconsContainer = styled.div`
    padding: 10px;
    padding-bottom: 6px;
    background: #fbfbfb;
    border: 1px solid #ebebeb;
    @media(max-width: 1280px){
        
    }
    @media(max-width: 1024px){
      
    }
    @media(max-width: 800px) {
        img {
            width: 22px;
        }
    }
    @media (max-width: 500px) {
        
    }
`
const FooterCopyright = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    margin-bottom: 30px;
    color: #1a1a1a;
    font-size: 20px;
    hr {
        width: 80%;
        border: none;
        border-radius: 10px;
        height: 3px;
        background: #c7c7c7;
    }
    @media(max-width: 1280px){
        
    }
    @media(max-width: 1024px){
      
    }
    @media(max-width: 800px) {
        font-size: 13px;
    }
    @media (max-width: 500px) {
        
    }
`
