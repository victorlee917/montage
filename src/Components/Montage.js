import React from "react";
import styled from "styled-components";
import mockup from "../Assets/Images/Mockup/mockup.gif";

const Box = styled.div`
  background: ${(props) =>
    ` rgba(255,255,255,0) url(${props.montageimg}) no-repeat center center`};
  background-size: 100%;
  min-width: 100%;
  min-height: 300px;
  margin-bottom: 30px;
  box-shadow: 0px 0px 12px -5px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 0px 12px -5px rgba(0, 0, 0, 0.5);
  &:hover {
    transition: 0.5s ease-in-out;
    background-size: 120%;
  }
  &:hover .detail {
    transition: 0.5s ease-in-out;
    opacity: 1;
  }
`;

const Montage = () => {
  return <Box montageimg={mockup}></Box>;
};

export default Montage;
