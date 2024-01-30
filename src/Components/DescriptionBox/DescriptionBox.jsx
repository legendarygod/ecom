import React from 'react'
import styled from 'styled-components'

const DescriptionBox = () => {
  return (
    <Wrapper>
        <Navigator>
            <NavBoxed>
                Description
            </NavBoxed>
            <NavReview>
                Review
            </NavReview>
        </Navigator>
        <Descriptor>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nulla autem laborum facere sequi laudantium impedit consequuntur eum aspernatur ut dolorem libero necessitatibus quas exercitationem harum praesentium explicabo iusto beatae ea aut, vitae assumenda. Reiciendis saepe molestiae voluptates numquam, placeat dicta! Praesentium blanditiis deserunt totam sapiente tempora alias. Beatae mollitia libero dignissimos, similique iure sit sint nisi accusantium voluptatibus non.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum temporibus dolore nobis nisi illum nihil voluptatem quidem, blanditiis rerum repellendus est vitae unde quae autem assumenda cumque accusamus sunt optio.
            </p>
        </Descriptor>
    </Wrapper>
  )
}

export default DescriptionBox

const Wrapper = styled.div`
    margin: 120px 170px;
    @media(max-width: 1280px){
        margin: 60px;
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        margin: 60px 20px;
    }
    @media (max-width: 500px) {
        
    }
`
const Navigator = styled.div`
    display: flex;
`
const NavBoxed = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    width: 171px;
    height: 70px;
    border: 1px solid #d0d0d0;
    @media(max-width: 1280px){
        
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        font-size: 14px;
    }
    @media (max-width: 500px) {
        
    }
`
const NavReview = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    width: 171px;
    height: 70px;
    border: 1px solid #d0d0d0;
    background: #FBFBFB;
    color: #555;
    @media(max-width: 1280px){
        
    }
    @media(max-width: 1024px){
        
    }
    @media(max-width: 800px) {
        font-size: 14px;
    }
    @media (max-width: 500px) {
        
    }
`
const Descriptor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    border: 1px solid #D0D0D0;
    padding: 48px;
    padding-bottom: 70px;
`
