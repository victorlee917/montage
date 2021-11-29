import React from "react";
import styled from "styled-components";
import right from "../Assets/Images/Icons/right_black.png";
import Channel from "./Channel";

const Box = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100vh;
  width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px 0px 80px 80px;
  @media screen and (max-width: 1000px) {
    position: relative;
    padding: 80px 30px 0px 30px;
    height: auto;
    width: 100%;
  }
  @media screen and (max-width: 479px) {
    padding: 80px 20px 0px 20px;
  }
`;

const TBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 1000px) {
    margin-bottom: 60px;
  }
`;

const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-bottom: 20px;
`;

const BackIcon = styled.img`
  height: 100%;
  transform: rotate(180deg);
`;

const Title = styled.div`
  font-weight: 800;
  line-height: 1.5;
  font-size: 48px;
  font-family: "Outfit", sans-serif;
  margin-bottom: 30px;
`;

const Desc = styled.div`
  font-size: 16px;
  line-height: 2;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 5px;
`;

const Instagram = styled.a`
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    transition: 0.5s ease-in-out;
    color: rgba(0, 0, 0, 1);
  }
`;

const BBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Author = styled.a`
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  font-size: 12px;
  &:hover {
    transition: 0.5s ease-in-out;
    color: rgba(0, 0, 0, 1);
  }
`;

const Header = ({
  title = "Montage.gif",
  desc,
  channelArray,
  stage,
  history,
  author,
  authorurl,
}) => {
  return (
    <Box>
      <TBox>
        {stage === "About" ? (
          <BackButton onClick={() => history.goBack(1)}>
            <BackIcon src={right}></BackIcon>
          </BackButton>
        ) : null}
        <Title className="dD">{title}</Title>
        <Desc className="dD">{desc}</Desc>
        <Channel channelArray={channelArray}></Channel>
      </TBox>
      <BBox>
        <Author className="dD" href={authorurl} target="_blank">
          ⓒ{author}
        </Author>
      </BBox>
    </Box>
  );
};

export default Header;
