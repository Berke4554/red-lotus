import styled from "@emotion/styled";
import Map from "./Map";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    width: 300px;
    gap: 15px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e0dede;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 15px;
  border: none;
  border-radius: 5px;
  background-color: #e0dede;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #da4ea2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ytyk8m8",
        "template_3mfe9mg",
        ref.current,
        "-GJKLROloa--Mq0LH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact us</Title>
            <Input placeholder="Name" name="name"></Input>
            <Input placeholder="Email" name="email"></Input>
            <TextArea
              placeholder="Write your message"
              rows={10}
              name="message"
            ></TextArea>
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
