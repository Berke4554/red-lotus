import styled from "@emotion/styled";
import React from "react";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1000px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 62px;

  @media only screen and (max-width: 768px) {
    width: 300px;
    text-align: center;
    font-size: 52px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da5ea2;
`;

const Description = styled.p`
  font-size: 24px;
  color: lightgrey;
`;

const Button = styled.button`
  background-color: #da5ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>{/*3d model */}</Left>
        <Right>
          <Title>Think outside the square space.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who we are</Subtitle>
          </WhatWeDo>
          <Description>
            A creative group of developers and designers with a passion for the
            game arts.
          </Description>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
