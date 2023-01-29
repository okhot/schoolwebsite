import React from 'react';
import { RiPlayFill } from 'react-icons/ri';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: white;
  border: 2px solid orange;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  color: #4f4a4a;
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: orange;

    span{
      background-color: #fff;
      color: #dd8725;
    }

  }

  span {
    color: #fff;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dd8725;
  }
`;

const Buttons = ({ label }) => {
  return (
    <StyledButton>
      {label}
      <span>
        <RiPlayFill />
      </span>
    </StyledButton>
  );
};

export default Buttons;
