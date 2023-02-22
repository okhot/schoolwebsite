import React from 'react';
import styled from 'styled-components';
import data from '../../../Data/Gallery.json';

const StyledGallery = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .gallery__image {
    width: 20%;
    min-width: 250px;
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #fff;
    font-size: 28px;
    font-weight: 500;
    filter: brightness(100%);
    transition: 0.2s linear filter;
    scale: 1;
    transition: 0.3s ease-in-out scale;

    p {
      opacity: 0;
      text-align: center;
      transition: 0.2s ease-in opacity;
    }
  }

  .gallery__image:hover {
    cursor: pointer;
    filter: brightness(25%);
    scale: 1.055;
    z-index: 4;

    p {
      opacity: 1;
      z-index: 4;
    }
  }

  @media screen and (max-width: 500px) {
    .gallery__image {
      min-width: 50%;
    }
  }
`;

function Gallery() {
  return (
    <StyledGallery>
      {data.map((item) => {
        return (
          <div
            className="gallery__image"
            style={{ backgroundImage: `url(${item.src})` }}
            key={item.id}
          >
            <p>{item.title}</p>
          </div>
        );
      })}
    </StyledGallery>
  );
}

export default Gallery;
