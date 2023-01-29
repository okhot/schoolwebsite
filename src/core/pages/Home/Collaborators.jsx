import React from 'react';
import styled from 'styled-components';
import data from '../../../Data/collaborators.json';

const StyledContainers = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 5% 10%;

  img {
    width: 16%;
  }
`;

function Collaborators() {
  return (
    <StyledContainers>
      {data.map((el) => {
        return <img src={el.scr} alt={el.id} key={el.id} />;
      })}
    </StyledContainers>
  );
}

export default Collaborators;
