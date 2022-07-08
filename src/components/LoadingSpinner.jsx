import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.section`
  margin: 25vh auto;
  text-align: center;
  width: 75%;
  .fa-spin {
    color: #2a81cb;
    font-size: 64px;
    padding-right: auto;
    width: auto;
  }
`;

function LoadingSpinner() {
  return (
    <LoadingWrapper>
      <i className="fa-solid fa-spinner fa-spin" />
    </LoadingWrapper>
  );
}

export default LoadingSpinner;
