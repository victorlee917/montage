import React from "react";
import Container from "../Components/Container";
import Header from "../Components/Header";
import Contents from "../Components/Contents";
import Card from "../Components/Card";
import instagram from "../Assets/Images/Icons/instagram.png";

const Home = ({ history }) => {
  return (
    <Container>
      <Header
        stage="Home"
        desc={
          <>
            전체는 부분의 합보다 크다.<p></p>몽타주를 그리는 매거진<p></p>-
          </>
        }
        channelArray={[
          {
            url: "https://www.instagram.com/montage.gif/",
            platform: instagram,
          },
        ]}
        author="junwoolee"
        authorurl="https://junwoolee.me"
      ></Header>
      <Contents stage="Home" history={history}>
        <Card
          stage="Home"
          themeColor="darkred"
          textColor="white"
          leftText="#1."
          category="People"
          title="Bogus"
          subTitle="사이드 프로젝트를 사랑하는 기획자"
        ></Card>
      </Contents>
    </Container>
  );
};

export default Home;
