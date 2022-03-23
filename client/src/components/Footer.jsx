import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Right = styled.div`
  padding: 20px;
  flex: 1;

  ${mobile({
    backgroundColor: "#eee",
  })}
`;
const Center = styled.div`
  padding: 20px;
  flex: 1;

  ${mobile({
    display: "none",
  })}
`;
const Title = styled.h3`
  font-size: 22px;
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Link = styled.a`
  text-decoration: none;
  color: black;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Logo = styled.h2`
  font-size: 35px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ZACH.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eveniet
          eligendi enim! Quod deleniti, voluptatibus nam adipisci minima
          voluptatem tenetur doloremque, at velit dicta iste quae mollitia?
          Voluptates, in cumque!
        </Desc>
        <SocialContainer>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link href="#">Man Fashion</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Women Fashion</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Accessories</Link>
          </ListItem>
          <ListItem>
            <Link href="#">My Account</Link>
          </ListItem>
          <ListItem>
            <Link href="#">My Orders</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Wishlist</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Terms</Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title></Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          4, Le Duan Street, Ben Nghe, Ward 1, Ho Chi Minh City
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +84-24-3850-5000
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} />
          zachhung911@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
