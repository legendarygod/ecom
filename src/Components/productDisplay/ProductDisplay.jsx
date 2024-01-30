import React, { useContext } from 'react'
import star_icon from '../Assets/Ecommerce_Frontend_Assets/Assets/star_icon.png'
import star_dull_icon from '../Assets/Ecommerce_Frontend_Assets/Assets/star_dull_icon.png'
import styled from 'styled-components'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
  return (
    <Wrapper>
        <LeftDisplay>
            <ImgList>
                <img src={product.image} alt="product." />
                <img src={product.image} alt="product" />
                <img src={product.image} alt="producte" />
                <img src={product.image} alt="product." />
            </ImgList>
            <DisplayImg>
                <img src={product.image} alt="product" />
            </DisplayImg>
        </LeftDisplay>
        <RightDisplay>
            <h1>{product.name}</h1>
            <DisplayRightStar>
                <img src={star_icon} alt="star_icon" />
                <img src={star_icon} alt="star_icon" />
                <img src={star_icon} alt="star_icon" />
                <img src={star_icon} alt="star_icon" />
                <img src={star_dull_icon} alt="star_dull_icon" />
                <p>122</p>
            </DisplayRightStar>
            <RDPrices>
                <OldPrice>
                    ${product.old_price}
                </OldPrice>
                <NewPrice>
                    ${product.new_price}
                </NewPrice>
            </RDPrices>
            <ProductDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus minima molestias quia temporibus deserunt quos? Pariatur, illo! Magni laborum voluptas tenetur numquam ut aut, rerum itaque molestias ex quo hic.
            </ProductDescription>
            <ProductSize>
                <h1>Select Size</h1>
                <Sizes>
                    <Size>S</Size>
                    <Size>M</Size>
                    <Size>L</Size>
                    <Size>XL</Size>
                    <Size>XXL</Size>
                </Sizes>
            </ProductSize>
            <Button onClick={() => {addToCart(product.id)}}>Add To Cart</Button>
            <CategoryText><span>Category :</span> Women, T-shirt</CategoryText>
            <CategoryText><span>Tags :</span> Women, T-shirt</CategoryText>
        </RightDisplay>
    </Wrapper>
  )
}

export default ProductDisplay

const Wrapper = styled.div`
    display: flex;
    margin: 0px 170px;
    @media(max-width: 1280px){
        margin: 0px 60px;
    }
    @media(max-width: 1024px){
        margin: 0px 30px;
    }
    @media(max-width: 800px) {
        margin: 0px 10px;
    }
    @media (max-width: 500px) {
        flex-direction: column;
    }
`
const LeftDisplay = styled.div`
    display: flex;
    gap: 17px;
    @media(max-width: 1280px){
        gap: 10px;
    }
    @media(max-width: 1024px){
        gap: 5px;
    }
    @media(max-width: 800px) {
        gap: 0px;
        flex-direction: column-reverse;
        align-items: center;
    }
    @media (max-width: 500px) {
        gap: 10px;
        flex-direction: row;
        margin: auto;
    }
`
const ImgList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    img {
        height: 163px;
    }
    @media(max-width: 1280px){
        gap:10px;
        img {
            height: 120px;
        }
    }
    @media(max-width: 1024px){
        img {
            height: 80px;
        }
    }
    @media(max-width: 800px) {
        flex-direction: row;
        gap: 6px;
        img {
            height: 70px;
        }
    }
    @media (max-width: 500px) {
        flex-direction: column;
        gap: 8px;
        img {
            height: 75px;
        }
    }
`
const DisplayImg = styled.div`
    img {
        width:586px;
        height: 700px;
    }
    @media(max-width: 1280px){
        img {

            width: auto;
            height: 510px;
        }
    }
    @media(max-width: 1024px){
        img {
            height: 350px;
        }
    }
    @media(max-width: 800px) {
        img {
            height: 300px;
        }
    }
    @media (max-width: 500px) {
        img {
            height: 330px;
        }
    }
`
const RightDisplay = styled.div`
    margin: 0px 70px;
    display: flex;
    flex-direction: column;
    h1 {
        color: #3d3d3d;
        font-size: 40px;
        font-weight: 700;
    }
    @media(max-width: 1280px){
        margin: 0px 30px;
        h1 {
            font-size: 22px;
        }
    }
    @media(max-width: 1024px){
        h1 {
            font-size: 18px;
        }
    }
    @media(max-width: 800px) {
        h1 {
            font-size: 14px;
        }
    }
    @media (max-width: 500px) {
        margin: 5px;
        h1 {
            margin-top: 15px;
            font-size: 20px;
            font-weight: 500;
        }
    }
`
const DisplayRightStar = styled.div`
    display: flex;
    align-items: center;
    margin-top: 13px;
    gap: 5px;
    color: #1c1c1c;
    font-size: 16px;
    @media(max-width: 1280px){
        gap: 3px;
        font-size: 13px;
    }
    @media(max-width: 1024px){
        img {
            width: 15px;
        }
    }
    @media(max-width: 800px) {
        img {
            width: 13px;
        }
    }
    @media (max-width: 500px) {
        img {
            width: 15px;
        }
    }
`
const RDPrices = styled.div`
    display:flex;
    margin: 40px 0px;
    gap: 30px;
    font-size: 24px;
    font-weight: 700;
    @media(max-width: 1280px){
        margin: 10px 0px;
        font-size: 18px;
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        
    }
    @media (max-width: 500px) {
        
    }
`
const OldPrice = styled.div`
    color: #818181;
    text-decoration: line-through;
`
const NewPrice = styled.div`
    color: #ff4141;

`
const ProductDescription = styled.div`
    @media(max-width: 1280px){
        font-size: 13px;
    }
    @media(max-width: 1024px){
        font-size: 12px;
    }
    @media(max-width: 800px) {
        font-size: 10px;
    }
    @media (max-width: 500px) {
        
    }
`
const ProductSize = styled.div`
    h1 {
        margin-top: 55px;
        color: #656565;
        font-size: 20px;
        font-weight: 600;
    }
    @media(max-width: 1280px){
        h1 {
            margin-top: 20px;
            font-size: 20px;
        }
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        h1 {
            margin-top: 10px 0px;
        }
    }
    @media (max-width: 500px) {
        
    }
`
const Sizes = styled.div`
    display: flex;
    margin: 30px 0px;
    gap: 20px;
    @media(max-width: 1280px){
        
    }
    @media(max-width: 1024px){
        margin: 10px 0px;
    }
    @media(max-width: 800px) {
        margin-top: 10px;
        gap: 5px;
    }
    @media (max-width: 500px) {
        gap: 10px;
        margin: 30px 0px;
    }
`
const Size = styled.div`
    padding: 18px 24px;
    background: #fbfbfb;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    cursor: pointer;
    @media(max-width: 1280px){
        padding: 14px 20px;
    }
    @media(max-width: 1024px){
        padding: 10px 16px;
        font-size: 12px;
    }
    @media(max-width: 800px) {
        padding: 4px 11px;
    }
    @media (max-width: 500px) {
        padding: 10px 16px;
        font-size: 14px;
    }
`
const Button = styled.button`
    padding: 20px 40px;
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background: #FF4141;
    margin-bottom: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    @media(max-width: 1280px){
        width: 150px;
        padding: 15px 0px;
        margin-bottom: 20px;
    }
    @media(max-width: 1024px){
        width: 120px;
        paddng: 10px 0px;
        margin-bottom: 10px;
        font-size: 14px;
    }
    @media(max-width: 800px) {
        width:100px;
        font-size: 12px;
    }
    @media (max-width: 500px) {
        width: 130px;
        font-size: 15px;
        padding: 12px 0px;
    }
`
const CategoryText = styled.p`
    margin-top: 10px;
    span {
        font-weight: 600;
    }
    @media(max-width: 1280px){
        margin-top: 5px;
        font-size: 14px;
    }
    @media(max-width: 1024px){
        font-size: 12px;
    }
    @media(max-width: 800px) {
        font-size: 10px;
    }
    @media (max-width: 500px) {
        font-size: 16px;
    }
`