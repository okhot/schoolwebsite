import React, { useEffect, useState } from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { SlideTestimonial } from 'react-materialui-testimonials-transition';
import test from '../../../Data/Testimonials.json';

import styled from 'styled-components';

const StyledContaier = styled.div`
  width: 100%;
  height: 65vh;
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1613896527026-f195d5c818ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;

  .layer {
    background-color: rgba(9, 9, 9, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .testimonial__header {
    box-sizing: border-box;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    z-index: 1;

    h1 {
    }
  }

  .testimonial__content {
    z-index: 1;
    color: #defdef;
    width: 50%;
    margin: auto;
    text-align: center;

    p {
      margin: 5px;
      padding: 0;
      font-size: 28px;
    }
  }

  .quoteContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 1;
  }
  @media screen and (max-width: 550px) {
    .testimonial__content {
      width: 100%;
    }
  }
`;
const Testimonials = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setNum((prev) => (prev === test.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(intervalID);
  }, [num]);

  return (
    <StyledContaier>
      <div className="layer" />
      <div className="testimonial__header">
        <RiDoubleQuotesL size={60} color="#fff" />
        <h1>TESTIMONIALS</h1>
      </div>
      <div className="testimonial__content">
        <SlideTestimonial
          image=""
          alt="Arif Shariati"
          imageRadius="50%"
          title="Arif Shariati"
          subtitle="CEO"
          testimonial={test[num].testimony}
          transition={true}
          speed={1000}
          shadow={5}
        />
      </div>
      <div className="quoteContainer">
        <RiDoubleQuotesR size={60} color="#fff" />
      </div>
    </StyledContaier>
  );
};

export default Testimonials;
