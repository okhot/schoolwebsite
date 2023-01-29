import React from 'react';
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterLine,
} from 'react-icons/ri';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: #34393c;
  display: flex;
  padding: 5%;

  .inputFeild {
    width: 33%;
    h2 {
      margin: 10px 0;
      color: white;
      font-size: 24px;
    }

    input {
      height: 50px;
      width: 300px;
      border-radius: 8px 0 0 8px;
    }

    input:focus {
      outline: none;
    }

    button {
      height: 54px;
      border: none;
      padding: 0 10px;
      background-color: #1ba4d1;
      color: white;
      font-size: 16px;
      font-weight: 400;
      border-radius: 0 8px 8px 0;
    }
  }
`;

const StyledSocialLogos = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;

  h2 {
      margin: 10px 0;
      color: white;
      font-size: 24px;
    }
`;

const Search = () => {
  return (
    <StyledContainer>
      <StyledSocialLogos>
        <h2>CONNECT WITH US</h2>
        <div className="logos">
        <RiFacebookBoxLine size={55} color="#fff" />
        <RiInstagramLine size={55} color="#fff" />
        <RiTwitterLine size={55} color="#fff" />
        <RiLinkedinBoxLine size={55} color="#fff" />
        </div>
      </StyledSocialLogos>

      <div className="inputFeild">
        <h2>GET THE LATEST LBS INFO</h2>
        <input type="text" placeholder="EMAIL" />
        <button>Subscribe</button>
      </div>
    </StyledContainer>
  );
};

export default Search;
