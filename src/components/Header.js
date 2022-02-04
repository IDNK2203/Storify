import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${mobile({ padding: "5px 10px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  cursor: pointer;
  font-size: 14px;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 5px;
  ${mobile({ marginLeft: "0" })}
`;

const SearchInput = styled.input`
  border: none;
  font-family: inherit;
  &::placeholder {
    font-family: inherit;
  }
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  ${mobile({ fontSize: "1.5rem" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuLink = styled.div`
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 10px;
  ${mobile({ fontSize: "12px", padding: "0" })};
`;

function Header() {
  return (
    <header>
      <Container>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <SearchInput placeholder="search"></SearchInput>
            <SearchOutlinedIcon
              style={{ color: "grey", fontSize: "16px" }}
            ></SearchOutlinedIcon>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Storify.</Logo>
        </Center>
        <Right>
          <MenuLink>Signin</MenuLink>
          <MenuLink>Signup</MenuLink>
          <MenuLink>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuLink>
        </Right>
      </Container>
    </header>
  );
}

export default Header;
