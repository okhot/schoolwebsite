/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const GoogleMap = () => {
  return (
    <StyledWrapper>
      <h1>Location</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.0985156438596!2d10.176064214842162!3d5.981171330889205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f3e05ac13a01b%3A0xddc1605838e83665!2sGratitude%20Bilingual%20Nursery%20%26%20Primary%20School!5e0!3m2!1sen!2scm!4v1677014269238!5m2!1sen!2scm"
        width="100%"
        height="450"
        loading="lazy"
        style={{ border: 0 }}
      ></iframe>
    </StyledWrapper>
  );
};

export default GoogleMap;
