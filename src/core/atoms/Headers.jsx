import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  h1 {
    font-size: 48px;
    color: black;
    font-weight: 700;
    text-align: center;
  }

  @media screen and (max-width: 550px) {
    h1 {
      font-size: 25px;
    }
  }
`;

function Headers({ title }) {
  return (
    <StyledHeader>
      <h1>{title}</h1>
    </StyledHeader>
  );
}

export default Headers;
