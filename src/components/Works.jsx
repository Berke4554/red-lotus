import styled from "@emotion/styled";
import React from "react";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 56px;
  font-weight: bold;
  cursor: pointer;
  //yazımızı transparan yaptık ve ardından stroke verıp ıcı bosmus gıbı bır goruntu kattık.
  color: transparent;
  -webkit-text-stroke: 0.5px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  //yazılara efekt vermek için aynı konuma aynı yazıyı farklı renkte koyduk
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  // animasyon efektiyle birlikte aynı konuma koyduğumuz yazımızı ortaya çıkarttık
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default Works;
