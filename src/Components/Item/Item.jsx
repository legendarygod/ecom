import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Item = (props) => {
  return (
    <ItemDiv>
      <Link to={`/product/${props.id}`} onClick={window.scrollTo(0,0)}>
        <ItemImg src={props.image} alt='prop_image' />
        <ItemName>{props.name}</ItemName>
        <ItemPrices>
          <NewItemPrices>
            ${props.new_price}
          </NewItemPrices>
          <OldItemPrice>
            ${props.old_price}
          </OldItemPrice>
        </ItemPrices>
      </Link>
    </ItemDiv>
  )
}

export default Item

const ItemDiv = styled.div`
  width: 280px;
  &:hover {
    transform: scale(1.05);
    transition: 0.6s;
  }
  @media (max-width:1280px){
    width: 220px;
    font-size: 14px;
  }
  @media (max-width:1024px){
    width: 170px;
    font-size: 13px;
  }
  @media (max-width:800px){
    width: 120px;
    font-size: 12px;
  }
  @media (max-width:500px){
    width: 160px;
  }

`
const ItemImg = styled.img`
  width: 280px;
  @media (max-width:1280px){
   width: 220px; 
  }
  @media (max-width:1024px){
    width: 170px;
  }
  @media (max-width:800px){
    width: 120px;
  }
  @media (max-width:500px){
    width: 160px;
  }

`
const ItemName = styled.p`
  margin: 6px 0px;
`
const ItemPrices = styled.div`
  display: flex;
  gap: 20px;
`
const NewItemPrices = styled.div`
  color: #374151;
  font-size: 18px;
  font-weight: 600;
`
const OldItemPrice = styled.div`
  color: #8c8c8c;
  font-size: 18px;
  font-weight: 500;
  text-decoration: line-through;
  @media (max-width:1280px) {
    font-size: 14px;
  }
  @media (max-width:1024px){
    font-size: 13px;
  }
  @media (max-width:800px){
    font-size: 12px;
  }
  @media (max-width:500px){
    font-size: 11px;
  }
`