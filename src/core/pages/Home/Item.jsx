import React from 'react';
import styled from '@emotion/styled';

const SyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .container {
    p,
    h2 {
      font-family: 'Libre Baskerville', serif;
      color: #fff;
      text-shadow: -5px 4px 8px rgba(0, 0, 0, 0.74);
      text-align: center;
    }

    h2 {
      font-size: 52px;
    }
    p {
      font-size: 32px;
    }
  }
  @media screen and (max-width: 550px) {
    .container {
      h2 {
        font-size: 32px;
      }
      p {
        font-size: 18px;
      }
    }
  }
`;

export function Item(props) {
  return (
    <SyledWrapper style={{ backgroundImage: `url(${props.item.src})` }}>
      <div className="container">
        <h2>{props.item.title}</h2>
        <p>{props.item.description}</p>
      </div>
    </SyledWrapper>
  );
}
