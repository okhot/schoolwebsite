import React from 'react';
import styled from 'styled-components';
import Buttons from '../../atoms/Buttons';

const StyledStickyBar = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1% 10%;
`;

const StyledBarInfoWrapper = styled.div`
  display: flex;
`;

const StyledBarInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 35px; // static value
  margin: 15px 0;
  border-right: 1px solid #dedddd;
  font-size: 1rem;

  p {
    margin: 0;
    padding: 0;
    color: #4f4a4a;
    font-size: 0.75rem;
    text-align: left;
  }

  h3 {
    margin: 0;
    padding: 0;
    text-align: left;
    font-size: 0.875rem;
  }

  @media screen and (max-width: 550px) {
    .hide {
      display: none;
    }
  }
`;

const StickyBar = () => {
  return (
    <StyledStickyBar>
      <div className="stickyBar-logo">
        <a href="#home">
          <img
            src="http://lekkibritishschool.org/wp-content/uploads/2018/02/logo.png"
            alt="logo"
          />
        </a>
      </div>
      <StyledBarInfoWrapper>
        <StyledBarInfo>
          <p>EMAIL</p>
          <h3>enquiries@lekkibritishschool.org</h3>
        </StyledBarInfo>
        <StyledBarInfo className="hide">
          <p className="hide">PHONE</p>
          <h3 className="hide">(+234) 01 906 0000</h3>
        </StyledBarInfo>
      </StyledBarInfoWrapper>
      <div className="hide">
        <Buttons label="Student Portal" />
      </div>
    </StyledStickyBar>
  );
};

export default StickyBar;
