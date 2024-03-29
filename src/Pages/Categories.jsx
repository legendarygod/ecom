import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CategoryNav = () => {
  return (
    <NavCat>
      <Nav>
        <Link style={{textDecoration: 'none'}} to={'/sliding'}>
          Sliding Doors
        </Link>
      </Nav>
      <Nav>
        <Link style={{textDecoration: 'none'}} to={'/bulletproof'}>
          BulleProof Doors
        </Link>
      </Nav>
      <Nav>
        <Link style={{textDecoration: 'none'}} to={'/normal'}>
          Normal Doors
        </Link>
      </Nav>
    </NavCat>
  )
}

export default CategoryNav
const NavCat = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  border-top: 0.5px solid #000;
  align-items: center;
  justify-items: center;
  gap: 10px;
`
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #000;
  cursor: pointer;
`