import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 232px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
  cursor: ${(props) => (props.stage === "Home" ? "pointer" : "default")};
  &:hover {
    border-color: ${(props) => props.categoryColor};
  }
  &:hover .tagChips {
    transition: 0.5s ease-in-out;
    opacity: 1;
  }
`;

const TBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-family: "Outfit", sans-serif;
  font-size: 12px;
  background-color: ${(props) => props.categoryColor};
  color: ${(props) => props.textColor};
`;

const IssueNumber = styled.div`
  opacity: 1;
`;

const Category = styled.div`
  opacity: 0.5;
`;

const BBox = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  /* @media screen and (max-width: 550px) {
    flex-direction: column;
  } */
`;

const BLBox = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    ` rgba(0,0,0,0.2) url(${props.img}) no-repeat center center`};
  background-size: cover;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const BRBox = styled.div`
  width: 100%;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 10px;
  /* @media screen and (max-width: 550px) {
    width: 100%;
  } */
`;

const BRTBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 20px;
  font-family: ${(props) =>
    props.stage === "Home" ? `"Outfit", sans-serif` : "default"};
  margin-bottom: 12px;
  font-weight: ${(props) => (props.stage === "Home" ? "default" : "800")};
`;

const SubTitle = styled.div`
  margin-bottom: 12px;
  line-height: 1.5;
`;

const Desc = styled.div`
  font-weight: 200;
  line-height: 1.5;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
`;

const BRBBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagChip = styled.div`
  margin-bottom: 10px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: ${(props) => props.themeColor};
  opacity: 0.5;
`;

const TagText = styled.span`
  color: ${(props) => props.textColor};
  opacity: 1;
  font-weight: 200;
  font-size: 10px;
`;

const Card = ({
  stage,
  themeColor = "black",
  category,
  categoryColor = "black",
  leftText,
  textColor = "white",
  title,
  subTitle,
  desc,
  img,
}) => {
  return (
    <Box className="dD" categoryColor={categoryColor} stage={stage}>
      <TBox categoryColor={categoryColor} textColor={textColor}>
        <IssueNumber>{leftText}</IssueNumber>
        <Category>{category}</Category>
      </TBox>
      <BBox>
        <BLBox img={img}></BLBox>
        <BRBox>
          <BRTBox>
            <Title stage={stage}>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            <Desc>{desc}</Desc>
          </BRTBox>
          <BRBBox>
            {stage === "About" ? null : (
              <>
                <TagChip themeColor={themeColor} className="tagChips">
                  <TagText textColor={textColor}>#기획자</TagText>
                </TagChip>
                <TagChip themeColor={themeColor} className="tagChips">
                  <TagText textColor={textColor}>#글쓰기</TagText>
                </TagChip>
                <TagChip themeColor={themeColor} className="tagChips">
                  <TagText textColor={textColor}>#사이드허슬러</TagText>
                </TagChip>
              </>
            )}
          </BRBBox>
        </BRBox>
      </BBox>
    </Box>
  );
};

export default Card;
