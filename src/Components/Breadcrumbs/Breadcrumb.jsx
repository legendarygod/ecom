import React from 'react'
import styled from 'styled-components'
import arrow_icon from '../Assets/Ecommerce_Frontend_Assets/Assets/breadcrum_arrow.png'

const Breadcrumb = (props) => {
    const {product} = props
  return (
    <Wrapper>
        <img src={arrow_icon} alt="arrow_icon" /> SHOP <img src={arrow_icon} alt="arrow_icon" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </Wrapper>
  )
}

export default Breadcrumb

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: 600;
  margin: 60px 170px;
  text-transform: capitalize;
  @media(max-width: 1280px){
        margin: 30px 50px;
        font-size: 14px;
    }
    @media(max-width: 1024px){
        margin: 30px 30px;
        font-size: 13px;
    }
    @media(max-width: 800px) {
        margin: 30px 10px;
        font-size: 12px;
    }
    @media (max-width: 500px) {
       
        font-size: 10px;
    }
`