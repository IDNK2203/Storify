import styled from "styled-components";
import { popularProducts } from "../data";
import ProductsItem from "../components/ProductsItem";

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

function Products() {
  return (
    <Section>
      {popularProducts.map((item) => (
        <ProductsItem item={item} key={item.id}></ProductsItem>
      ))}
    </Section>
  );
}

export default Products;
