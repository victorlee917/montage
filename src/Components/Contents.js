import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Montage from "./Montage";

const Box = styled.div`
  z-index: 1000;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 45%;
  width: 55%;
  @media screen and (max-width: 1000px) {
    margin-left: 0px;
    width: 100%;
    margin-top: 50px;
  }
`;

const SBox = styled.div`
  padding: 80px 80px 0px 10px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 10px 30px 0px 30px;
  }
  @media screen and (max-width: 479px) {
    padding: 10px 20px 0px 20px;
  }
`;

const TBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TLBox = styled.div`
  display: flex;
  align-items: center;
`;

const ListIcon = styled.div`
  width: 10px;
  height: 10px;
  background-color: rgba(0, 0, 0, 1);
  margin-right: 5px;
`;

const ListTitle = styled.div`
  font-family: "Outfit", sans-serif;
  font-size: 16px;
`;

const TRBox = styled.div``;

const Contents = ({ listTitle = "Montages", stage, children, history }) => {
  return (
    <Box>
      <SBox>
        {stage === "Home" ? <Banner history={history}></Banner> : null}
        {stage === "Detail" ? <Montage history={history}></Montage> : null}
        <TBox>
          <TLBox>
            <ListIcon></ListIcon>
            <ListTitle className="dD">{listTitle}</ListTitle>
          </TLBox>
          <TRBox></TRBox>
        </TBox>
        {children}
      </SBox>
    </Box>
  );
};

export default Contents;
