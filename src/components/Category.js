import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "../components/CategoryItem";
import { mobile } from "../responsive";

const Section = styled.section`
  display: flex;
  align-items: center;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

function Category() {
  return (
    <Section>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}></CategoryItem>
      ))}
    </Section>
  );
}

export default Category;
