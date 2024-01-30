import React from 'react'
import styled from 'styled-components'
import hand_icon from '../Assets/Ecommerce_Frontend_Assets/Assets/hand_icon.png'
import arrow_icon from '../Assets/Admin Panel Assets/arrow_icon.svg'
import hero_image from '../Assets/Ecommerce_Frontend_Assets/Assets/hero_image.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <HeroDiv>
        <HeroLeft>
            <Text>
                NEW ARRIVALS ONLY
            </Text>
            <SubHeroLeft>
                <HandHandIcon>
                    <p>New</p>
                    <img src={hand_icon} alt='hand_icon' />
                </HandHandIcon>
                <p>Collection</p>
                <p>for everyone</p>
            </SubHeroLeft>
            <HeroLatest>
                <Link to='/normal'>
                <HLText>View Categories</HLText>
                </Link>
                <img src={arrow_icon} alt='arrow_icon' />
            </HeroLatest>
        </HeroLeft>
        <HeroRight>
            <img src={hero_image} alt='hero_image' />
        </HeroRight>
    </HeroDiv>
  )
}

export default Hero

const HeroDiv = styled.div`
    height: 100vh;
    background: linear-gradient(180deg, #fde1ff, #e1ffea22 60%);
    display: flex;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`
const HeroLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding-left: 180px;
    line-height: 1.1;    

    p{
        color: #171717;
        font-size: 100px;
        font-weight: 700;
    }
    @media(max-width: 1280px){
        padding-left: 100px;
        p {
            font-size: 60px;
        }
    }
    @media(max-width: 1024px){
        padding-left: 80px;
        p {
            font-size: 50px;
        }
    }
    @media(max-width: 800px) {
        padding-left: 30px;
        p {
            font-size: 40px;
        }
        
    }
    @media (max-width: 500px) {
        p {
            font-size: 50px;
        }
    }
`
const Text = styled.h2`
    color: #090909;
    font-size: 26px;
    font-weight: 600;
    @media(max-width: 1280px){
        font-size: 22px;
    }
    @media(max-width: 1024px){
        font-size: 22px;
    }
    @media(max-width: 800px) {
        font-size: 16px;
    }
    @media (max-width: 500px) {
        font-size: 18px;
    }
`
const SubHeroLeft = styled.div`
    
`
const HandHandIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    img {
        width: 105px;
    }
    @media(max-width: 1280px){
        img {
            width: 80px;
        }
    }
    @media(max-width: 1024px){
      img {
        width: 65px;
      }
    }
    @media(max-width: 800px) {
        img {
            width: 50px;
        }
    }
    @media (max-width: 500px) {
        img {
            width: 55px;
        }
    }
`
const HeroLatest = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 310px;
    height: 70px;
    border-radius: 75px;
    margin-top: 30px;
    background: #ff4141;
    color: white;
    font-size: 22px;
    font-weight: 500;
    @media(max-width: 1280px){
        gap: 10px;
        width: 250px;
        height: 60px;
        margin-top: 20px;
        font-size: 18px;
    }
    @media(max-width: 1024px){
      width: 220px;
      height: 50px;
      font-size: 16px;
    }
    @media(max-width: 800px) {
        width: 175px;
        height: 40px;
        font-size: 13px;
    }
    @media (max-width: 500px) {
        width: 200px;
        height: 45px;
        font-size: 14px
    }
`
const HLText = styled.div``
const HeroRight = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 1280px){
        img {
            width: 500px;
        }
    }
    @media(max-width: 1024px){
      img {
        width: 400px;
      }
    }
    @media(max-width: 800px) {
        width: 300px;
    }
    @media (max-width: 500px) {
        display: none;
    }
`