import React from 'react';
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterLine,
} from 'react-icons/ri';
import styled from 'styled-components';

const StyledContainer = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #34393c;
    display: flex;
    padding: 0.5% 5%;
  }

  @media screen and (max-width: 550px) {
    .container {
      h2 {
        margin: 0;
        font-size: 18px;
      }
    }
  }
`;

const StyledSocialLogos = styled.div`
  .logosContainer {
    display: flex;
    flex-direction: column;
    width: 100%;

    .logos {
      display: flex;
      gap: 5px;
    }

    .icons {
      width: 35px;
      height: 35px;
      border: 3px solid orange;
      border-radius: 50%;
      padding: 5px;
    }

    h2 {
      margin: 10px 0;
      color: white;
      font-size: 24px;
    }
  }

  @media screen and (max-width: 550px) {
    .logosContainer {
      width: fit-content;

      h2 {
        margin: 0;
        font-size: 18px;
      }

      .logos {
        display: flex;
      }
    }
  }
`;

const Search = () => {
  return (
    <StyledContainer>
      <div className="container">
        <StyledSocialLogos>
          <div className="logosContainer">
            <h2>CONNECT WITH US</h2>
            <div className="logos">
              <RiFacebookBoxLine size={50} color="#fff" className="icons" />
              <RiInstagramLine size={50} color="#fff" className="icons" />
              <RiTwitterLine size={50} color="#fff" className="icons" />
              <RiLinkedinBoxLine size={50} color="#fff" className="icons" />
            </div>
          </div>
        </StyledSocialLogos>
      </div>
    </StyledContainer>
  );
};

export default Search;
