import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
  box-sizing: border-box;
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1563265500-fa2ff1f4fc9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7% 10%;

  .layer {
    background-color: rgba(116, 13, 13, 0.8);
    filter: blur(75%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .content {
    color: white;
    z-index: 2;

    h3,
    h1 {
      margin: 5px 0;
    }
  }

  .counter {
    display: flex;

    .container {
      width: 25%;

      h2,
      p {
        margin: 0;
      }

      p {
        font-size: 32px;
      }
    }
  }
`;

function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const scroll = window.innerHeight;
  if (scroll === 160) {
    setTimeout(() => {
      setInterval(() => {
        setCount1((count) => (count === 4 ? (count = count + 1) : count));
      }, 1000);

      setInterval(() => {
        setCount2((count) => (count = count + 133));
      }, 100);

      setInterval(() => {
        setCount3((count) => (count = count + 133));
      }, 100);

      setInterval(() => {
        setCount4((count) => (count = count + 133));
      }, 100);
    }, 5000);
  }

  return (
    <StyledCounter>
      <div className="layer" />
      <div className="content">
        <h3>THE NUMBERS SAY IT ALL</h3>
        <h1>WHY DILIGENCE BILINGUAL COMPLEX</h1>
        <div className="counter">
          <div className="container">
            <p>{count1 % 4}</p>
            <h2>CERTIFIED SCHOOLS</h2>
          </div>
          <div className="container">
            <p>{count2 % 1880}</p>
            <h2>LIFETIME ENROLMENT</h2>
          </div>

          <div className="container">
            <p>{count3 % 100}%</p>
            <h2>PASS RATE TO UNIVERSITIES</h2>
          </div>

          <div className="container">
            <p>{count4 % 100}%</p>
            <h2>SATISFIED PARENTS</h2>
          </div>
        </div>
      </div>
    </StyledCounter>
  );
}

export default Counter;
