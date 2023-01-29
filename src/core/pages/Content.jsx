import React from 'react';
import { RiPlayFill } from 'react-icons/ri';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledContent = styled.div`
  display: flex;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  height: 45vh;
  padding: 2% 10%;
  gap: 50px;

  .videoContainer {
    background-image: url('http://lekkibritishschool.org/wp-content/uploads/2018/02/video.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 40%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 75px;
      height: 75px;
      border-radius: 50%;
      background-color: white;
    }
  }

  .textContent {
    width: 60%;
    text-align: left;

    h3{
      margin: 0;
      padding: 0;
    }

    p, h1 {
      margin: 5px;
    }

    p {
      color: #a6a5a5;
      font-size: 20px;
      font-weight: 400;
    }
  }
`;

function Content() {
  return (
    <StyledContent>
      <div className="videoContainer">
        <Link target="_blank" to="https://youtu.be/2ev6YPOg3qQ" rel="noreferrer">
          <RiPlayFill size={60} color="lightgrey" />
        </Link>
      </div>
      <div className="textContent">
        <h3>WELCOME TO DBC</h3>
        <h1>Diligence Bilingual Complex</h1>
        <p>
          Lekki British Senior School is the first British Boarding school in
          Lagos, Nigeria.
        </p>
        <p>
          Our Aim at Lekki British School is to allow your child discover and
          develop their unique talents within a disciplined and caring,
          traditional British School environment.
        </p>
        <p>
          Our Mission Statement is ``To provide an environment in which each
          individual is assisted to discover his or her academic potential in
          study, sports and personal development.
        </p>
        <div className="showMore">
          <span>Learn More</span>
        </div>
      </div>
    </StyledContent>
  );
}

export default Content;
