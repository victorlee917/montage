import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
`;

const ChannelBox = styled.a`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 15px;
  &:hover {
    transition: 0.5s ease-in-out;
    border: 1px solid rgba(0, 0, 0, 1);
  }
  &:hover img {
    transition: 0.5s ease-in-out;
    opacity: 1;
  }
`;

const ChannelIcon = styled.img`
  height: 14px;
  opacity: 0.3;
`;

const Channel = ({ channelArray }) => {
  return (
    <Box>
      {channelArray.map((item, index) => (
        <ChannelBox target="_blank" key={index} href={item.url}>
          <ChannelIcon src={item.platform}></ChannelIcon>
        </ChannelBox>
      ))}
    </Box>
  );
};

export default Channel;
