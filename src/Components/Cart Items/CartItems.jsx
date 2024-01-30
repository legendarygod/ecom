import React, { useContext } from 'react'
import styled from 'styled-components'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/Admin Panel Assets/cross_icon.png'

const CartItems = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext)

    console.log("cart is ", cartItems);


  return (
    <Wrapper>
        <MainFormat>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </MainFormat>
        <hr />
        {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
                return <SecDiv>
                            <ItemsFormat>
                                <ProductIcon src={e.image} alt='e_image' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <QuantityButton>
                                    {cartItems[e.id]}
                                </QuantityButton>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <RemoveIcon src={remove_icon} onClick = {() => {removeFromCart(e.id)}}alt='remove_icon'/>
                            </ItemsFormat>
                            <hr />
                        </SecDiv>
            }
            return null;
        })}
        <CartDetails>
            <CartTotal>
                <h1>Cart Totals</h1>
                <div>
                    <TotalItems>
                        <p>SubTotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </TotalItems>
                    <hr />
                    <TotalItems>
                        <p>Shipping fee</p>
                        <p>Free</p>  
                    </TotalItems>
                    <hr />
                    <TotalItems>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </TotalItems>
                </div>
                <button>Proceed to Checkout</button>

            </CartTotal>
        </CartDetails>
    </Wrapper>
  )
}

export default CartItems

const Wrapper = styled.div`
    margin: 100px 170px;
    hr {
        height: 3px;
        background: #e2e2e2;
        border: 0;
    }
    @media(max-width: 1280px){
        margin: 60px 50px;
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        
    }
    @media (max-width: 500px) {
        
    }
`
const MainFormat = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr;
    align-items: center;
    gap: 75px;
    padding: 20px 0px;
    color: #454545;
    font-size: 18px;
    font-weight: 600;
    @media(max-width: 1280px){
        grid-template-columns: 0.5fr 3fr 0.5fr 0.5fr 0.5fr 0.5fr;
        gap: 20px;
        padding: 15px 0px;
        font-size: 15px;
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        
    }
    @media (max-width: 500px) {
        display: none;
        grid-template-columns: 0.5fr 3fr 0.5fr;
        gap: 10px;
    }
`
const SecDiv = styled.div``
const ItemsFormat = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr;
    align-items: center;
    gap: 75px;
    padding: 20px 0px;
    color: #454545;
    font-size: 17px;
    font-weight: 500;
    @media(max-width: 1280px){
        grid-template-columns: 0.5fr 3fr 0.5fr 0.5fr 0.5fr 0.5fr;
        gap: 20px;
        padding: 15px 0px;
        font-size: 15px;
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        
    }
    @media (max-width: 500px) {
        display: grid;

    }
`
const ProductIcon = styled.img`
    height: 62px;
    @media(max-width: 1280px){
        height: 50px;
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        
    }
    @media (max-width: 500px) {
        
    }
`
const QuantityButton = styled.button`
    width: 64px;
    height: 50px;
    border: 2px solid #ebebeb;
    background: #fff;
    @media(max-width: 1280px){
        width: 40px;
        height: 30px;
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        
    }
    @media (max-width: 500px) {
        
    }
`
const RemoveIcon = styled.img`
    width: 15px;
    margin: 0px 40px;
    cursor: pointer;
    @media(max-width: 1280px){
        margin: auto;
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        
    }
    @media (max-width: 500px) {
        
    }
`
const CartDetails = styled.div`
    display: flex;
    margin: 100px 0px;
    @media(max-width: 1280px){
        margin: 80px 0px;
        flex-direction: column;
        gap: 80px;
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        
    }
    @media (max-width: 500px) {
        
    }
`
const CartTotal = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: 200px;
    gap: 40px;

    button{
        width: 262px;
        height: 58px;
        outline: none;
        border: none;
        background: #ff5a5a;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }
    @media(max-width: 1280px){
        margin: 0;

        button {
            max-width: 200px;
            height: 45px;
            font-size: 13px;
        }
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        
    }
    @media (max-width: 500px) {
        
    }
`
const TotalItems = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 0px; 
`



