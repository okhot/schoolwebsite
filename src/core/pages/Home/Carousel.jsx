import React, { useState } from 'react';
import styled from 'styled-components';
import Buttons from '../../atoms/Buttons';
import data from '../../../Data/homeCarousel.json';

const StyledCarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .StyledCarousel {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;

    .buttons {
      width: 100%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      transform: translateY(-50%);
      position: absolute;

      button {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        border: none;
        font-weight: 900;
        color: rgba(0, 0, 0, 0, 0.2);
        background-color: rgba(0, 0, 0, 0.4);
        cursor: pointer;
      }
    }

    h1 {
      font-size: 3.5rem;
      margin: 0;
      padding: 0;
    }

    p {
      font-size: 1.125rem;
      text-align: center;
      word-break: normal;
      text-shadow: 2px 1px black;
      width: 50%;
    }
  }
`;

const StyledCirclesContainer = styled.span`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 15px;
  transform: translateY(-200%);

  span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(100, 100, 100, 0.7);
    cursor: pointer;

    &:hover {
      background-color: #800000;
    }
  }
`;

const Carousel = () => {
  const [value, setValue] = useState(0);

  function Increment() {
    setValue((value) => (value = (value + 1) % 11));
  }

  function decrement() {
    setValue((value) => (value = value === 0 ? 10 : (value - 1) % 12));
  }


  return (
    <>
      <StyledCarouselWrapper>
        <div
          className="StyledCarousel"
          key={data[value].id}
          style={{ backgroundImage: `url(${data[value].src})` }}
        >
          <h1>{data[value].title}</h1>
          <p>{data[value].discription}</p>
          <Buttons label={data[value].buttonLabel} />
          <div className="buttons">
            <button type="button" onClick={() => decrement()}>
              &lang;
            </button>
            <button type="button" onClick={() => Increment()}>
              &rang;
            </button>
          </div>
        </div>
        <StyledCirclesContainer>
          {data.map((item, index) => (
            <span onClick={() => setValue(index)} key={item.id}></span>
          ))}
        </StyledCirclesContainer>
      </StyledCarouselWrapper>
    </>
  );
};

export default Carousel;
