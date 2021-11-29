import React from "react";
import styled from "styled-components";

const BBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100%;
`;

const SBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  position: relative;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 100vw;
  }
`;

const Container = ({ children }) => {
  return (
    <BBox>
      <SBox>{children}</SBox>
    </BBox>
  );
};

export default Container;
