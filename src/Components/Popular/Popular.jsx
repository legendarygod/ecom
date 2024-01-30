import React from 'react'
import styled from 'styled-components'
import data_product from '../Assets/Ecommerce_Frontend_Assets/Assets/data'
import Item from '../Item/Item'


const Popular = () => {
  return (
    <PopularDiv>
        <HeaderText>Popular</HeaderText>
        <hr />
        <PopularItem>
            {data_product.map((item, index) => {
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price = {item.old_price}/>
            })}
        </PopularItem>
    </PopularDiv>
  )
}

export default Popular

const PopularDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 90vh;

    hr {
        width: 200px;
        height: 6px;
        border-radius: 10px;
        background: #252525;
    }
    @media(max-width: 1280px){
        height: 70vh;
        hr {
            width: 160px;
            height: 4px;
        }
    }
    @media(max-width: 1024px){
        height: 60vh;
        hr {
            width: 120px;
            height: 3px;
        }
    }
    @media(max-width: 800px) {
        height: 50vh;
        gap: 6px;
        hr {
            width: 100px;
        }
    }
    @media (max-width: 500px) {
        height: 90vh;
    }
`

const HeaderText = styled.h1`
    color: #171717;
    font-size: 50px;
    font-weight: 600;
    @media(max-width: 1280px){
        font-size: 40px;
    }
    @media(max-width: 1024px){
        font-size: 30px;
    }
    @media(max-width: 800px) {
        font-size: 20px;
    }
    @media (max-width: 500px) {
        
    }
`
const PopularItem = styled.div`
    margin-top: 50px;
    display: flex;
    gap: 30px;
    @media(max-width: 1280px){
        gap: 20px;
        margin-top: 30px;
    }
    @media(max-width: 1024px){
        gap: 15px;
        margin-top: 20px;
    }
    @media(max-width: 800px) {
        gap: 5px;
    }
    @media (max-width: 500px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
`