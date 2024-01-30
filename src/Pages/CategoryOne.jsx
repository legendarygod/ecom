import React, { useContext } from 'react'
import styled from 'styled-components'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import dropdown_icon from '../Components/Assets/Ecommerce_Frontend_Assets/Assets/dropdown_icon.png'
import CategoryNav from './Categories'

const Categories = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <>
    <CategoryNav />
    <Wrapper>
      <ShopBanner src={props.banner} alt="props_banner" />
      <CategoryIndexSort>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <ShopCategorySort>
          Sort by <img src={dropdown_icon} alt="dropdown" />
        </ShopCategorySort>
      </CategoryIndexSort>
      <ShopCategoryProducts>
        {all_product.map((item, index) => {
          if (props.category===item.category) {
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price = {item.old_price}/>
          } else {
            return null
          }
        })}
      </ShopCategoryProducts>
      <LoadMore>
        Explore More
      </LoadMore>
    </Wrapper>
    </>
  )
}

export default Categories

const Wrapper = styled.div``
const ShopBanner = styled.img`
  display: block;
  margin: 30px auto;
  width:  82%;
  @media(max-width: 1280px){
        margin: 20px auto;
        width: 90%;
    }
  @media(max-width: 1024px){
        
    }
  @media(max-width: 800px) {
        width: 95%
    }
  @media (max-width: 500px) {
        
    }
`
const CategoryIndexSort = styled.div`
  display: flex;
  margin: 0px 170px;
  justify-content: space-between;
  border: 1px solid #888;
  width: 90%;
  p {
    span {
      font-weight: 600;
    }
  }
  @media(max-width: 1280px){
        width: 90px;
        margin: auto;

        p {
          font-size: 12px;
        }
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        
    }
    @media (max-width: 500px) {
        
    }
`
const ShopCategorySort = styled.div`
  padding: 10px 20px;
  border-radius: 40px;
  border: 1pxsolid #888;
  @media(max-width: 1280px){
        padding: 5px 10px;
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        
    }
    @media (max-width: 500px) {
        
    }
`
const ShopCategoryProducts = styled.div`
  margin: 20px 170px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 80px;
  @media(max-width: 1280px){
        width: 90%;
        margin: 10px auto;
        row-gap: 40px;

        div {
          margin: auto;
        }
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        width: 95%;
    }
    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
`

const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 150px auto;
  width: 233px;
  height: 69px;
  border-radius: 75px;
  background:#ededed;
  color: #787878;
  font-size: 18px;
  font-weight: 500;
  @media(max-width: 1280px){
        margin: 100px auto;
        width: 200px;
        height: 60px;
        font-size: 16px;
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        margn: 60px auto;
        width: 150px;
        height: 40px;
        font-size: 13px;
    }
    @media (max-width: 500px) {
        
    }
`




