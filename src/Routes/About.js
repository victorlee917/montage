import React from "react";
import { Helmet } from "react-helmet";
import Container from "../Components/Container";
import Header from "../Components/Header";
import Contents from "../Components/Contents";
import Card from "../Components/Card";
import OutLink from "../Components/OutLink";
import instagram from "../Assets/Images/Icons/instagram.png";

const About = ({ history }) => {
  return (
    <Container>
      <Helmet>
        <title>Get My Montage.gif</title>
      </Helmet>
      <Header
        history={history}
        stage="About"
        title={"Get My Montage.gif"}
        channelArray={[
          {
            url: "https://www.instagram.com/montage.gif/",
            platform: instagram,
          },
        ]}
        desc={
          <>
            소개해드리는 스텝에 따라 저희에게 이야기를 들려주시면,<p></p>나를
            돌아보고 소개할 수 있는 멋진 몽타주를 그려드려요!<p></p>-
          </>
        }
        author="Montage.gif"
        authorurl="http://localhost:3000/#/"
      ></Header>
      <Contents listTitle={"Steps"} stage={"About"}>
        <Card
          stage="About"
          textColor="white"
          leftText="Step 1."
          title="제작 가능 여부 확인하기"
          subTitle="저희에게 먼저 문의주세요!"
          desc={
            <>
              몽타주 제작이 가능할지 몽타주 인스타그램 채널(
              <OutLink
                url="https://www.instagram.com/montage.gif/"
                text="@montage.gif"
              ></OutLink>
              )을 통해 먼저 확인해주세요. 인스타그램 계정이 없으시다면
              victorlee917@gmail.com로 메일 문의 부탁드립니다. 협의를 통해
              진행이 가능한 경우 아래의 스텝에 따라 진행됩니다.
            </>
          }
          category="1/6"
        ></Card>
        <Card
          stage="About"
          textColor="white"
          leftText="Step 2."
          title="퍼스널 컬러 정하기"
          subTitle="내가 좋아하는 색상을 정해보세요!"
          desc="좋아하는 색상 혹은 자신과 어울리는 색상이 있다면 하나 정해주세요. 몽타주의 배경 색상이 된답니다."
          category="2/6"
        ></Card>
        <Card
          stage="About"
          textColor="white"
          leftText="Step 3."
          title="대표 사진 정하기"
          subTitle="나를 대표하는 사진을 정해보세요!"
          desc="나를 잘 표현할 수 있는 사진을 골라주세요. 대표 사진에서 몽타주의 실루엣을 잡으니 자신의 모습이 잘 드러난 정면 사진을 추천해요."
          category="3/6"
        ></Card>
        <Card
          stage="About"
          textColor="white"
          leftText="Step 4."
          title="내용 사진 정하기"
          subTitle="나를 표현해주는 사진들을 정해보세요!"
          desc="대표 사진에 이어 나를 잘 표현할 수 있는 내용 사진들을 골라주세요. 나에게 중요한 의미가 있는 사진이라면 무엇이든 좋아요. 골라주신 사진들이 배경과 실루엣 안에서 순차적으로 변경될 거예요."
          category="4/6"
        ></Card>
        <Card
          stage="About"
          textColor="white"
          leftText="Step 5."
          title="사진별로 코멘트 남기기"
          subTitle="어떤 점에서 나에게 중요한 의미가 있는지 남겨봐요!"
          desc="대표 이미지를 포함하여 각 사진들이 내게 왜 중요한 의미가 있는지 기록해봐요. 길게 쓸 필요는 없어요! 사진 관련 제목, 부제목, 간단한 설명, 해시태그 등을 붙여주시면 큰 도움이 돼요."
          category="5/6"
        ></Card>
        <Card
          stage="About"
          textColor="white"
          leftText="Step 6."
          title="Montage.gif에 전달하기"
          subTitle="어느 정도 정리가 되면 저희에게 전달해주세요!"
          desc="위의 내용에 대해 어느 정도 정리가 되면 메일 주소 victorlee917@gmail.com으로 정리된 내용을 보내주세요. 내부 확인 후 회신드립니다."
          category="6/6"
        ></Card>
        <Card
          stage="About"
          textColor="white"
          leftText="Goal!"
          title="Montage 완성🎉"
          subTitle="몽타주가 다 만들어지면 말씀드려요!"
          desc="가까운 사람들 그리고 앞으로 친해질 사람들에게 나의 Montage.gif를 공유해보세요."
        ></Card>
      </Contents>
    </Container>
  );
};

export default About;
