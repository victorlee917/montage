import React from "react";
import Container from "../Components/Container";
import Header from "../Components/Header";
import Contents from "../Components/Contents";
import Card from "../Components/Card";
import instagram from "../Assets/Images/Icons/instagram.png";
import url from "../Assets/Images/Icons/url.png";
import mockup1 from "../Assets/Images/Mockup/mockup1.jpeg";
import mockup2 from "../Assets/Images/Mockup/mockup2.jpeg";

const Bogus = ({ history }) => {
  return (
    <Container>
      <Header
        stage="Detail"
        title="Shinji.gif"
        desc={
          <>
            Shinji Ikari.<p></p>-
          </>
        }
        channelArray={[
          { url: "https://www.instagram.com/jwluoe/", platform: instagram },
          { url: "https://junwoolee.me", platform: url },
        ]}
        author="Montage.gif"
        authorurl="http://localhost:3000/#/"
      ></Header>
      <Contents stage="Detail" history={history} listTitle="About Montage">
        <Card
          stage="Detail"
          themeColor="darkred"
          textColor="white"
          leftText="#1."
          category="Brand"
          title="낯선 천장"
          subTitle="부제"
          desc="설명"
          img={mockup1}
        ></Card>
        <Card
          stage="Detail"
          themeColor="darkred"
          textColor="white"
          leftText="#2."
          category="People"
          title="단짝"
          subTitle="부제"
          desc="설명"
          img={mockup2}
        ></Card>
      </Contents>
    </Container>
  );
};

export default Bogus;
