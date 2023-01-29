import React from 'react';
import Header from '../../atoms/Headers';
import styled from 'styled-components';
import data from '../../../Data/advertisement.json';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 10%;
  background-color: #fbf8f8;

  .cardContainer {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .Card {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 300px;
    height: 300px;

    p {
      color: #fff;
      font-size: 25px;
    }
  }
`;

function Card() {
  return (
    <StyledCard>
      <Header title="ENROLL IN OUR SCHOOLS" />
      <div className="cardContainer">
        {data.map((item) => {
          return (
            <div
              className="Card"
              style={{ backgroundImage: `url(${item.src})` }}
              key={item.id}
            >
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </StyledCard>
  );
}

export default Card;
