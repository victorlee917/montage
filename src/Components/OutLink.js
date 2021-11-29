import React from "react";
import styled from "styled-components";

const Atag = styled.a`
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: ${(props) => props.themeColor};
  }
`;

const OutLink = ({ url, text, themeColor = "rgba(0,0,0,1)" }) => {
  return (
    <Atag target="_blank" href={url} themeColor={themeColor}>
      {text}
    </Atag>
  );
};

export default OutLink;
