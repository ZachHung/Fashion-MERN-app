import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

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
  width: 25%;
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
  margin: 12px 0;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
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

  &:disabled {
    color: teal;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  color: black;
  text-decoration: underline;
  margin: 5px 0;
  font-size: 12px;

  :hover {
    color: teal;
  }
`;
const Error = styled.span`
  color: red;
`;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <Input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="password"
          ></Input>
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>SOMETHING WENT WRONG</Error>}
          <Link href="">FORGOT YOUR PASSWORD?</Link>
          <Link href="">SIGN UP</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
