import styled from "styled-components";
import Announcement from "../components/Announcement";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";

const Wrapper = styled.div``;

const ProductListSection = styled.section`
  padding: 1rem;
`;
const HeaderContainer = styled.div`
  padding-bottom: 1rem;
`;
const ProductHeader = styled.h2`
  font-size: 3rem;
  font-weight: bold;
`;

const QueryCrtlsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const QueryCrtl = styled.div`
  display: flex;
  align-items: center;
`;
const QueryCrtlTitle = styled.h3`
  font-weight: bold;
  margin-right: 1rem;
`;

const QueryDropdown = styled.select`
  padding: 0.5rem;
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
            <QueryDropdown style={{ margin: "0 1rem" }}>
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

        <Products></Products>
      </ProductListSection>

      <Newsletter></Newsletter>
      <Footer></Footer>
    </Wrapper>
  );
}

export default ProductList;
