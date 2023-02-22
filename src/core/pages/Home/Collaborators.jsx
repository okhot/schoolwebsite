import React from 'react';
import styled from 'styled-components';
import data from '../../../Data/collaborators.json';

const StyledContainers = styled.div`
  .wrapper {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 5% 10%;

    img {
      width: 16%;
    }
  }

  @media screen and (max-width: 550px) {
    .wrapper {
      flex-direction: column;
      align-items: center;

      img {
        width: 85%;
      }
    }
  }
`;

function Collaborators() {
  return (
    <StyledContainers>
      <div className="wrapper">
        {data.map((el) => {
          return <img src={el.scr} alt={el.id} key={el.id} />;
        })}
      </div>
    </StyledContainers>
  );
}

export default Collaborators;
