import React from 'react'
import styled from 'styled-components'
import exclusive_image from '../Assets/Ecommerce_Frontend_Assets/Assets/exclusive_image.png'

const KnowUs = () => {
  return (
    <OffersDiv>
        <OffersLeft>
            <OLText>SHOPPER</OLText>
            <OLText>Get to know us!</OLText>
            <OLParagraph>Want more information about our services?</OLParagraph>
            <Button>Read about us!</Button>
        </OffersLeft>
        <OffersRight>
            <ORImage src={exclusive_image} alt='excl_img'/>
        </OffersRight>
    </OffersDiv>
  )
}

export default KnowUs

const OffersDiv = styled.div`
    width: 65%;
    height: 60vh;
    display: flex;
    margin: auto;
    padding: 0px 140px;
    margin-bottom: 150px;
    background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);
    @media(max-width: 1280px){
        padding: 0px 80px;
        margin-bottom: 120px;
    }
    @media(max-width: 1024px){
        padding: 0 60px;
        margin-bottom: 80px;
        height: 40vh;
    }
    @media(max-width: 800px) {
        margin-bottom: 60px;
    }
    @media (max-width: 500px) {
        height: 25vh;
        margin-bottom: 50px;
    }
`

const OffersLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const OLText = styled.h1`
    color: #171717;
    font-size: 80px;
    font-weight: 600;
    @media(max-width: 1280px){
        font-size: 40px;
    }
    @media(max-width: 1024px){
        font-size: 30px;
    }
    @media(max-width: 800px) {
        font-size: 22px;
    }
    @media (max-width: 500px) {
        font-size: 16px;
    }
`
const OLParagraph = styled.p`
    color: #171717;
    font-size: 22px;
    font-weight: 600;
    @media(max-width: 1280px){
        font-size: 18px;
    }
    @media(max-width: 1024px){
        font-size: 16px;
    }
    @media(max-width: 800px) {
        font-size: 13px;
    }
    @media (max-width: 500px) {
        font-size: 10px;
    }
`
const Button = styled.button`
    width: 282px;
    height: 70px;
    border-radius: 35px;
    background: #ff4141;
    border: none;
    color: white;
    font-size: 22px;
    font-weight: 500;
    margin-top: 30px;
    cursor: pointer;
    @media(max-width: 1280px){
        width: 220px;
        height: 50px;
        font-size: 18px;
    }
    @media(max-width: 1024px){
        width: 160px;
        height: 40px;
        font-size: 16px;
    }
    @media(max-width: 800px) {
        width: 140px;
        height: 30px;
        font-size: 13px;
    }
    @media (max-width: 500px) {
        width: 120px;
        height: 25px;
        font-size: 10px;
        margin-top: 10px;
    }
`

const OffersRight = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 50px;
    @media(max-width: 1280px){
        padding-top: 30px;
    }
    @media(max-width: 1024px){
        padding-top: 10px;
    }
    @media(max-width: 800px) {
        
    }
    @media (max-width: 500px) {
        
    }
`

const ORImage = styled.img`
    @media(max-width: 1280px){
        width: 300px;
    }
    @media(max-width: 1024px){
        width: 200px
    }
    @media(max-width: 800px) {
        width: 180px;
    }
    @media (max-width: 500px) {
        width: 120px;
    }
`