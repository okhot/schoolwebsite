import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  const [hidden, setHidden] = useState(false);

  const StyledFooter = styled.div`
    .Wrapper {
      box-sizing: border-box;
      display: flex;
      padding: 3% 5%;
      background-color: #2b2f31;
    }

    .footerLinks {
      display: flex;
      flex-direction: column;
      width: 20%;
      transition: 0.8s ease-in height;
      height: ${hidden ? '5vh' : 'fit-content'};

      .title {
        h2 {
          display: inline;
          width: fit-content;
        }

        button {
          display: none;
          font-size: 25px;
          background-color: transparent;
          border: none;
          color: orange;
        }
      }

      hr {
        width: 100%;
        background-color: lightblue;
        display: none;
      }

      h2 {
        color: white;
        font-size: 22px;
        margin: 0;
      }

      ul {
        display: flex;
        flex-direction: column;
        display: ${hidden ? 'none' : 'block'};
        margin: 0;
        padding: 0;
        li {
          list-style: none;
          margin: 2px;
          padding: 0;
          a {
            text-decoration: none;
            color: orange;
            font-size: 16px;
          }
        }
      }
    }

    .styledInfo {
      display: flex;
      flex-direction: column;
      width: 20%;

      .links {
        text-align: left;

        display: flex;
        a {
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          margin: 5px;
        }
      }
    }

    @media screen and (max-width: 550px) {
      .Wrapper {
        flex-direction: column;
        padding: 1% 3%;
        width: 100%;
        align-items: center;
      }

      .styledInfo {
        display: none;
      }

      .footerLinks {
        width: 100%;

        .title {
          display: flex;
          justify-content: space-between;
          width: 100%;

          button {
            display: block;
          }
        }

        hr {
          display: block;
        }

        h2 {
          font-size: 16px;
        }

        ul {
          li {
            a {
              font-size: 14px;
            }
          }
        }
      }
    }
  `;

  return (
    <StyledFooter>
      <div className="Wrapper">
        <div className="footerLinks">
          <div className="title">
            <h2>ABOUT US</h2>
            {hidden ? (
              <button onClick={() => setHidden((prev) => !prev)}>+</button>
            ) : (
              <button onClick={() => setHidden((prev) => !prev)}>-</button>
            )}
          </div>
          <ul>
            <li>
              <a href="#links">About</a>
            </li>
            <li>
              <a href="#links">Meet The Principal</a>
            </li>
            <li>
              <a href="#links">The Chief Executive Officer</a>
            </li>
            <li>
              <a href="#links">Our Facilities</a>
            </li>
            <li>
              <a href="#links">Our Management Team</a>
            </li>
          </ul>
          <hr />
        </div>

        <div className="footerLinks">
          <div className="title">
            <h2>OUR SCHOOLS</h2>
            {hidden ? (
              <button onClick={() => setHidden((prev) => !prev)}>+</button>
            ) : (
              <button onClick={() => setHidden((prev) => !prev)}>-</button>
            )}
          </div>
          <ul>
            <li>
              <a href="#links">Pre-School</a>
            </li>
            <li>
              <a href="#links">Junior School</a>
            </li>
            <li>
              <a href="#links">Senior School</a>
            </li>
            <li>
              <a href="#links">Advanced Classes</a>
            </li>
          </ul>
          <hr />
        </div>

        <div className="footerLinks">
          <div className="title">
            <h2>WHY LBS</h2>
            {hidden ? (
              <button onClick={() => setHidden((prev) => !prev)}>+</button>
            ) : (
              <button onClick={() => setHidden((prev) => !prev)}>-</button>
            )}
          </div>

          <ul>
            <li>
              <a href="#links">Our Facilities</a>
            </li>
            <li>
              <a href="#links">Boarding Experience</a>
            </li>
            <li>
              <a href="#links">Microsoft PIL</a>
            </li>
            <li>
              <a href="#links">Parents as Partners</a>
            </li>
            <li>
              <a href="#links">Multi Culturalism</a>
            </li>
            <li>
              <a href="#links">Extra-curricula Activities</a>
            </li>
          </ul>
          <hr />
        </div>
        <div className="footerLinks">
          <div className="title">
            <h2>ADMISSION PROCEDURE</h2>
            {hidden ? (
              <button onClick={() => setHidden((prev) => !prev)}>+</button>
            ) : (
              <button onClick={() => setHidden((prev) => !prev)}>-</button>
            )}
          </div>

          <ul>
            <li>
              <a href="#links">Admissions</a>
            </li>
            <li>
              <a href="#links">Entrance Examination</a>
            </li>
          </ul>
          <hr />
        </div>

        <div className="styledInfo">
          <img
            src="http://lekkibritishschool.org/wp-content/uploads/2018/02/web.png"
            alt="logo"
          />
          <p>© 2018 Lekki British School. All rights reserved</p>
          <div className="links">
            <Link>PRIVACY</Link>
            <Link>POLICYSITEMAP</Link>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
