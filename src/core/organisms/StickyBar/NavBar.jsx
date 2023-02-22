import React from 'react'
import {Link} from 'react-router-dom';
import {BiSearch} from 'react-icons/bi'
import styled from 'styled-components'


const StyledNavBar = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #800000;
  padding:  0 10%;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  
    li{
      padding: 20px 10px;
      border-right: 1px solid orange;
      margin: 0;
      font-size: 0.875rem;
      font-weight: 600;

        a{
          text-decoration: none;
          color: white;
        }
    }
  }
`
const NavBar = () => {
  return (
    <StyledNavBar>
      <ul>
        <li><Link to="#home">HOME</Link></li>
        <li><Link to="#discover">DISCOVER</Link></li>
        <li><Link to="#juniorschool">JUNIOR SCHOOL</Link></li>
        <li><Link to="#seinorschool">SENIOR SCHOOL</Link></li>
        <li><Link to="#contact">CONTACT</Link></li>
      </ul>

      <BiSearch size={28} color="#fff"/>

    </StyledNavBar>
  )
}

export default NavBar
