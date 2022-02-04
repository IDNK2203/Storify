import styled from "styled-components";
import Announcement from "../components/Announcement";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Wrapper = styled.div``;

const StyledProducts = styled(Products)`
  padding: "0px 0px";
`;

const ProductListSection = styled.section`
  padding: 1rem;
`;
const HeaderContainer = styled.div`
  ${mobile({
    paddingBottom: "1rem",
  })}
`;
const ProductHeader = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  ${mobile({
    fontSize: "2rem",
  })}
`;

const QueryCrtlsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
/* ${mobile({ flexDirection: "column" })} */
const QueryCrtl = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
`;
const QueryCrtlTitle = styled.h3`
  font-weight: bold;
  margin-right: 1rem;
  ${mobile({
    margin: " 0 1rem 0 0",
  })}
`;

const QueryDropdown = styled.select`
  padding: 0.5rem;
  margin: 0.5rem;
`;
const QueryDropdownOpts = styled.option``;

function ProductList() {
  return (
    <Wrapper>
      <Header></Header>
      <Announcement></Announcement>
      <ProductListSection>
        <HeaderContainer>
          <ProductHeader> Dresses</ProductHeader>
        </HeaderContainer>
        <QueryCrtlsBox>
          <QueryCrtl>
            <QueryCrtlTitle>Filter Product:</QueryCrtlTitle>
            <QueryDropdown>
              <QueryDropdownOpts selected disabled>
                Color{" "}
              </QueryDropdownOpts>
              <QueryDropdownOpts>Blue</QueryDropdownOpts>
              <QueryDropdownOpts> Grey</QueryDropdownOpts>
              <QueryDropdownOpts>Green</QueryDropdownOpts>
              <QueryDropdownOpts> RebeccaPurple</QueryDropdownOpts>
              <QueryDropdownOpts> Teal</QueryDropdownOpts>
            </QueryDropdown>
            <QueryDropdown>
              <QueryDropdownOpts selected disabled>
                Size{" "}
              </QueryDropdownOpts>
              <QueryDropdownOpts>S</QueryDropdownOpts>
              <QueryDropdownOpts> X</QueryDropdownOpts>
              <QueryDropdownOpts>L</QueryDropdownOpts>
              <QueryDropdownOpts> XL</QueryDropdownOpts>
            </QueryDropdown>
          </QueryCrtl>

          <QueryCrtl>
            <QueryCrtlTitle>Sort Product:</QueryCrtlTitle>
            <QueryDropdown>
              <QueryDropdownOpts selected>Newest </QueryDropdownOpts>

              <QueryDropdownOpts>Price (asc)</QueryDropdownOpts>
              <QueryDropdownOpts> Price (desc)</QueryDropdownOpts>
            </QueryDropdown>
          </QueryCrtl>
        </QueryCrtlsBox>

        <StyledProducts></StyledProducts>
      </ProductListSection>

      <Newsletter></Newsletter>
      <Footer></Footer>
    </Wrapper>
  );
}

export default ProductList;
