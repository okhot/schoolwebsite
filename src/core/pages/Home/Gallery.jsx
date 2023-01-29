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

    p {
      opacity: 1;
    }
  }

  .gallery__image:hover {
    cursor: pointer;
    background-image: none;
    background-color: rgba(0, 0, 0, 0, 0.7);
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
