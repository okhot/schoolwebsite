import React from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

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

    h1  {
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
`;
const Testimonials = () => {
  return (
    <StyledContaier>
      <div className="layer" />
      <div className="testimonial__header">
        <RiDoubleQuotesL size={60} color="#fff" />
        <h1>TESTIMONIALS</h1>
      </div>
      <div className="testimonial__content">
        <p>
          My Lekki British experience was nothing short of a building block to
          excellence. Moving on to study aeronautical engineering in
          Loughborough University come 
        </p>
        <span>Ms. Oyindamola Oyedepo, Lagos</span>
        {/* <p>
          My time at Lekki British Senior School was a great learning
          experience! It has been more than 7 years since I graduated with my
          friends, who have each done wonders to make the world a better place,
          and I still feel nostalgic about the moments we spent there.Read more
        </p>
        <span> Ayushi Pradhan, Salesforce US</span>

        <p>
          My name is Daniel Fatade. I have spent nearly the entirety of my life
          in Lekki British School. My stay at LBS started with my time in the
          reception class in junior school. As the years flew by, ! eventually
          found myself in Year 11 before graduating and arriving at Syracuse
          University. I have now spent roughly a year and half at Syracuse and
          am now a sophomore studying Computer Engineering.Read more
        </p>
        <span> Mr. Daniel Fatade, Sycaruse University </span>

        <p>
          My Lekki British experience was nothing short of a building block to
          excellence. Moving on to study aeronautical engineering in
          Loughborough University come September 2018.Read more
        </p>
        <span> Ms. Oyindamola Oyedepo, Lagos</span> */}
      </div>
      <div className="quoteContainer">
        <RiDoubleQuotesR size={60} color="#fff" />
      </div>
    </StyledContaier>
  );
};

export default Testimonials;
