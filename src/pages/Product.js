import styled from "styled-components";
import Announcement from "../components/Announcement";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
const Wrapper = styled.div``;
const ProductSection = styled.section`
  display: flex;
  padding: 3rem;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: max(70vh, 600px);
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 2rem;
`;
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 1rem 0;
  font-size: 1.125rem;
`;
const Price = styled.p`
  font-size: 3rem;
  font-weight: 200;
`;

const FilterContainer = styled.ul`
  display: flex;
  margin: 1rem 0;
`;
const FilterItem = styled.li`
  flex: 1;
`;
const FilterColorBox = styled.div`
  display: flex;
`;
const FilterColor = styled.div`
  margin: 0.25rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;
const FilterTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
`;
const FilterSize = styled.select`
  padding: 0.5rem;
`;
const FilterSizeOpt = styled.option``;
const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;
const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Quantity = styled.div`
  width: 60px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  flex: 1;
  padding: 15px 0;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  &:hover {
    background-color: #f8f4f4;
  }
`;

function Product() {
  return (
    <Wrapper>
      <Announcement></Announcement>
      <Header></Header>
      <ProductSection>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"></Image>
        </ImageContainer>
        <InfoContainer>
          <Title> Denim jacket</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            dolorum mollitia labore perferendis debitis eaque recusandae, ullam
            eius atque rerum.
          </Desc>
          <Price>$25</Price>
          <FilterContainer>
            <FilterItem>
              <FilterTitle>Colors:</FilterTitle>
              <FilterColorBox>
                <FilterColor color="black" />

                <FilterColor color="teal" />

                <FilterColor color="blue" />
              </FilterColorBox>
            </FilterItem>
            <FilterItem>
              <FilterTitle>Sizes:</FilterTitle>
              <FilterSize>
                <FilterSizeOpt>S</FilterSizeOpt>
                <FilterSizeOpt>M</FilterSizeOpt>
                <FilterSizeOpt>L</FilterSizeOpt>
                <FilterSizeOpt>XL</FilterSizeOpt>
              </FilterSize>
            </FilterItem>
          </FilterContainer>
          <QuantityContainer>
            <QuantityBox>
              <Remove style={{ cursor: "pointer" }}></Remove>
              <Quantity>{1}</Quantity>
              <Add style={{ cursor: "pointer" }}></Add>
            </QuantityBox>
            <Button> Add To Cart</Button>
          </QuantityContainer>
        </InfoContainer>
      </ProductSection>
      <Newsletter></Newsletter>

      <Footer></Footer>
    </Wrapper>
  );
}

export default Product;
