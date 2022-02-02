import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "../components/CategoryItem";

const Section = styled.section`
  display: flex;
  align-items: center;
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
