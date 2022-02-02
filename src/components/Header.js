import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  cursor: pointer;
  font-size: 14px;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const SearchInput = styled.input`
  border: none;
  font-family: inherit;
  &::placeholder {
    font-family: inherit;
  }
`;
const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const MenuLink = styled.div`
  text-transform: uppercase;

  cursor: pointer;
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
          <MenuLink style={{ padding: "0 1rem" }}>Signup</MenuLink>
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
