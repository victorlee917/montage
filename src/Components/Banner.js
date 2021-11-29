import React from "react";
import styled from "styled-components";
import right from "../Assets/Images/Icons/right_black.png";
import bannerimg from "../Assets/Images/Icons/right_black.png";

const Box = styled.div`
  background: ${(props) =>
    ` rgba(255,255,255,0) url(${props.bannerimg}) no-repeat 110% 150%`};
  background-size: 200px;
  min-width: 100%;
  min-height: 250px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  box-shadow: 0px 0px 12px -5px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 0px 12px -5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    transition: 0.5s ease-in-out;
    background-size: 300px;
  }
  &:hover .detail {
    transition: 0.5s ease-in-out;
    opacity: 1;
  }
`;

const TBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Type = styled.div`
  margin-bottom: 15px;
  font-family: "Outfit", sans-serif;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 200;
  line-height: 1.4;
`;

const BBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  opacity: 0.5;
`;

const MoveText = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-right: 5px;
  font-size: 12px;
`;

const MoveIcon = styled.img`
  height: 8px;
`;

const Banner = ({ history }) => {
  return (
    <Box bannerimg={bannerimg} onClick={() => history.push("/about")}>
      <TBox>
        <Type>Get My Montage.gif</Type>
        <Title>
          이야기를 들려주시면,<p></p>몽타주를 그려드려요!
        </Title>
      </TBox>
      <BBox className="detail">
        <MoveText>자세히 보기</MoveText>
        <MoveIcon src={right}></MoveIcon>
      </BBox>
    </Box>
  );
};

export default Banner;
