import styled from "styled-components";
import Announcement from "../components/Announcement";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Wrapper = styled.div``;
const CartSection = styled.section``;
const CartHeading = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
const CartTitle = styled.h2`
  font-size: 2rem;
`;
const CartNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
const InfoTextBox = styled.div``;
const InfoText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  padding: 0 1rem;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 0.75rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};
  border: ${(props) => props.type === "filled" && "none"};
`;

const CartProducts = styled.div`
  display: flex;
  padding: 1rem;
  margin-right: 2rem;
`;
const CartProductList = styled.ul`
  flex: 2;
`;
const CartProduct = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #80808047;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const ProductImgBox = styled.div`
  width: 10rem;
  margin-right: 1rem;
`;
const ProductImg = styled.img`
  width: 100%;
`;
const ProductDet = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem 0;
  text-transform: uppercase;
`;
const ProductDets = styled.div``;

const Boldtext = styled.div`
  font-weight: bold;
  padding-right: 0.5rem;
  text-transform: capitalize;
`;

const ProductDetColor = styled.span`
  margin: 0.25rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;
const Right = styled.div``;
const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 1rem;
`;
const Quantity = styled.div`
  width: 40px;
  height: 30px;
  border-radius: 15px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  text-align: center;
`;
const CartSummary = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  height: 50vh;
  width: 100%;
  max-width: 22.5rem;
`;

const SummaryTitle = styled.h3`
  font-weight: 500;
  font-size: 2rem;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

function Cart() {
  return (
    <Wrapper>
      <Header></Header>
      <Announcement></Announcement>
      <CartSection>
        <CartHeading>
          <CartTitle>Your Bag</CartTitle>
        </CartHeading>
        <CartNav>
          <Button>Continue Shopping</Button>
          <InfoTextBox>
            <InfoText> Shopping Bag(2)</InfoText>
            <InfoText> Your Wishlist(0)</InfoText>
          </InfoTextBox>
          <Button type="filled">Checkout Now</Button>
        </CartNav>
        <CartProducts>
          <CartProductList>
            <CartProduct>
              <Left>
                <ProductImgBox>
                  <ProductImg src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"></ProductImg>
                </ProductImgBox>
                <ProductDets>
                  <ProductDet>
                    {" "}
                    <Boldtext>Product: </Boldtext> Chelsea Boots
                  </ProductDet>
                  <ProductDet>
                    {" "}
                    <Boldtext>Product ID: </Boldtext> 93813718293
                  </ProductDet>
                  <ProductDet>
                    {" "}
                    <Boldtext>color: </Boldtext>{" "}
                    <ProductDetColor color="teal"> </ProductDetColor>{" "}
                  </ProductDet>
                  <ProductDet>
                    {" "}
                    <Boldtext>SIze: </Boldtext> 37.5
                  </ProductDet>
                </ProductDets>
              </Left>
              <Right>
                <QuantityBox>
                  <Remove style={{ cursor: "pointer" }}></Remove>
                  <Quantity>{1}</Quantity>
                  <Add style={{ cursor: "pointer" }}></Add>
                </QuantityBox>
                <Price>$25</Price>
              </Right>
            </CartProduct>
            <CartProduct>
              <Left>
                <ProductImgBox>
                  <ProductImg src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"></ProductImg>
                </ProductImgBox>
                <ProductDets>
                  <ProductDet>
                    {" "}
                    <Boldtext>Product: </Boldtext>HAKURA T-SHIRT
                  </ProductDet>
                  <ProductDet>
                    {" "}
                    <Boldtext>Product ID: </Boldtext> 93813718293
                  </ProductDet>
                  <ProductDet>
                    {" "}
                    <Boldtext>color: </Boldtext>{" "}
                    <ProductDetColor color="grey"> </ProductDetColor>{" "}
                  </ProductDet>
                  <ProductDet>
                    {" "}
                    <Boldtext>SIze: </Boldtext>M
                  </ProductDet>
                </ProductDets>
              </Left>
              <Right>
                <QuantityBox>
                  <Remove style={{ cursor: "pointer" }}></Remove>
                  <Quantity>{1}</Quantity>
                  <Add style={{ cursor: "pointer" }}></Add>
                </QuantityBox>
                <Price>$20</Price>
              </Right>
            </CartProduct>
          </CartProductList>
          <CartSummary>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <Button type="filled" style={{ width: "100%" }}>
                Checkout Now
              </Button>
            </Summary>
          </CartSummary>
        </CartProducts>
      </CartSection>
      <Footer></Footer>
    </Wrapper>
  );
}

export default Cart;
