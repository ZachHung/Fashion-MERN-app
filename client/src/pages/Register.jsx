import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.fixbitt.com/wp-content/uploads/2021/07/estilo-pessoal-1.jpeg")
      center/ cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: whitesmoke;

  ${mobile({
    width: "75%",
  })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  padding: 10px;
  font-size: 18px;
  flex: 1;
  min-width: 40%;
  margin: 16px 10px 0 0;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  ${mobile({
    flexDirection: "column",
  })}
`;
const Agreement = styled.p`
  font-size: 14px;
  margin: 20px 0;
`;
const Button = styled.button`
  font-size: 16px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;

  ${mobile({
    width: "100%",
  })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input required placeholder="name"></Input>
          <Input required placeholder="last name"></Input>
          <Input required placeholder="username"></Input>
          <Input required type="email" placeholder="email"></Input>
          <Input required type="password" placeholder="password"></Input>
          <Input
            required
            type="password"
            placeholder="confirm password"
          ></Input>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <strong>PRIVACY POLICY</strong>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
