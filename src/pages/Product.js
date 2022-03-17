import styled from "styled-components";
import Announcement from "../components/Announcement";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
const Wrapper = styled.div``;
const ProductSection = styled.section`
  display: flex;
  padding: 3rem;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: max(70vh, 600px);
  object-fit: cover;
  ${mobile({ height: "max(40vh, 350px)" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 2rem;
  ${mobile({ padding: "10px" })}
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
  ${mobile({ fontSize: "2rem" })}
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
  ${mobile({
    width: "1rem",
    height: "1rem",
  })}
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
  ${mobile({
    width: "50px",
    height: "35px",
  })}
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
  ${mobile({
    padding: "10px 0",
  })}
`;

function Product() {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  const [color, setcolor] = useState("");
  const [size, setsize] = useState("");
  const [quantity, setquantity] = useState(0);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await publicRequest.get("/product/" + id);
        setproduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [id]);

  const handleQuantity = (op) => {
    if (op === "decrease") {
      quantity > 0 && setquantity(quantity - 1);
    } else {
      setquantity(quantity + 1);
    }
  };

  return (
    <Wrapper>
      <Announcement></Announcement>
      <Header></Header>
      {product.title && (
        <ProductSection>
          <ImageContainer>
            <Image src={product.img}></Image>
          </ImageContainer>
          <InfoContainer>
            <Title> {product.title}</Title>
            <Desc>{product.description}</Desc>
            <Price> ${product.price}</Price>
            <FilterContainer>
              <FilterItem>
                <FilterTitle>Colors:</FilterTitle>
                <FilterColorBox>
                  {product.color.map((item) => (
                    <FilterColor
                      key={item}
                      color={item}
                      onClick={() => {
                        setcolor(item);
                      }}
                    />
                  ))}
                </FilterColorBox>
              </FilterItem>
              <FilterItem>
                <FilterTitle>Sizes:</FilterTitle>
                <FilterSize
                  onChange={(e) => {
                    setsize(e.target.value);
                  }}
                >
                  {product.size.map((item) => (
                    <FilterSizeOpt key={item}> {item}</FilterSizeOpt>
                  ))}
                </FilterSize>
              </FilterItem>
            </FilterContainer>
            <QuantityContainer>
              <QuantityBox>
                <Remove
                  onClick={() => {
                    handleQuantity("decrease");
                  }}
                  style={{ cursor: "pointer" }}
                ></Remove>
                <Quantity>{quantity}</Quantity>
                <Add
                  onClick={() => {
                    handleQuantity("increase");
                  }}
                  style={{ cursor: "pointer" }}
                ></Add>
              </QuantityBox>
              <Button> Add To Cart</Button>
            </QuantityContainer>
          </InfoContainer>
        </ProductSection>
      )}
      <Newsletter></Newsletter>

      <Footer></Footer>
    </Wrapper>
  );
}

export default Product;
