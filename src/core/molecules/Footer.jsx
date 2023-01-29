import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 3% 5%;
  background-color: #2b2f31;
`;
const StyledFooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;

  h2 {
    color: white;
    font-size: 22px;
    margin: 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      margin: 2px;
      padding: 0;
      a {
        text-decoration: none;
        color: orange;
        font-size: 16px;
      }
    }
  }
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;

  .links {
    text-align: left;

    display: flex;
    a {
      font-size: 16px;
      font-weight: 600;
      text-decoration: none;
      margin: 5px;
    }
  }
`;

const footer = () => {
  return (
    <StyledFooter>
      <StyledFooterLinks>
        <h2>ABOUT US</h2>
        <ul>
          <li>
            <a href="#links">About</a>
          </li>
          <li>
            <a href="#links">Meet The Principal</a>
          </li>
          <li>
            <a href="#links">The Chief Executive Officer</a>
          </li>
          <li>
            <a href="#links">Our Facilities</a>
          </li>
          <li>
            <a href="#links">Our Management Team</a>
          </li>
        </ul>
      </StyledFooterLinks>
      <StyledFooterLinks>
        <h2>OUR SCHOOLS</h2>
        <ul>
          <li>
            <a href="#links">Pre-School</a>
          </li>
          <li>
            <a href="#links">Junior School</a>
          </li>
          <li>
            <a href="#links">Senior School</a>
          </li>
          <li>
            <a href="#links">Advanced Classes</a>
          </li>
        </ul>
      </StyledFooterLinks>
      <StyledFooterLinks>
        <h2>WHY LBS</h2>
        <ul>
          <li>
            <a href="#links">Our Facilities</a>
          </li>
          <li>
            <a href="#links">Boarding Experience</a>
          </li>
          <li>
            <a href="#links">Microsoft PIL</a>
          </li>
          <li>
            <a href="#links">Parents as Partners</a>
          </li>
          <li>
            <a href="#links">Multi Culturalism</a>
          </li>
          <li>
            <a href="#links">Extra-curricula Activities</a>
          </li>
        </ul>
      </StyledFooterLinks>
      <StyledFooterLinks>
        <h2>ADMISSION PROCEDURE</h2>
        <ul>
          <li>
            <a href="#links">Admissions</a>
          </li>
          <li>
            <a href="#links">Entrance Examination</a>
          </li>
        </ul>
      </StyledFooterLinks>

      <StyledInfoContainer>
        <img
          src="http://lekkibritishschool.org/wp-content/uploads/2018/02/web.png"
          alt="logo"
        />
        <p>© 2018 Lekki British School. All rights reserved</p>
        <div className="links">
          <Link>PRIVACY</Link>
          <Link>POLICYSITEMAP</Link>
        </div>
      </StyledInfoContainer>
    </StyledFooter>
  );
};

export default footer;
