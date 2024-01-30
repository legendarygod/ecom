import React from 'react'
import styled from 'styled-components'
import data_product from '../Assets/Ecommerce_Frontend_Assets/Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <Wrapper>
        <h1>Related Products</h1>
        <hr />
        <Items>
            {data_product.map((item, index) => {
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price = {item.old_price}/>
            })}
        </Items>
    </Wrapper>
  )
}

export default RelatedProducts

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 90vh;
    h1 {
        color: #171717;
        font-size: 50px;
        font-weight: 600;
    }
    hr {
        width:200px;
        height: 6px;
        border-radius: 10px;
        background: #252525;
    }
`
const Items = styled.div`
    margin-top: 50px;
    display: flex;
    gap: 30px;
` 