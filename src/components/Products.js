import styled from "styled-components";
import ProductsItem from "../components/ProductsItem";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "../requestMethods";

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

function Products({ cat, filters, sort }) {
  const [products, setproducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  console.log(filteredProducts);

  useEffect(() => {
    // get list of product from api categorized/uncategorized
    // when cat state changes or upon first render of component
    const getProduct = async () => {
      try {
        const incomingProducts = await publicRequest.get(
          cat ? "/product?category=" + cat : "/product"
        );
        setproducts(incomingProducts.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, [cat]);

  // filter product gotten from product api  if cat values avaliable(in a cat page)
  // upon first render component only and cat value is true
  // upon change of cat, product, filters
  useEffect(() => {
    const filterProducts = () =>
      products.filter((item) => {
        const filtersArray = Object.entries(filters);
        return filtersArray.every(([key, value]) => {
          return item[key].includes(value);
        });
      });
    cat && setfilteredProducts(filterProducts());
  }, [cat, products, filters]);

  // sort filtered products in either asc, desc  of defualt lastest
  // upon component first render and change of sort state
  useEffect(() => {
    if (sort === "asc") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    } else {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }
  }, [sort]);

  return (
    <Section>
      {/* if cat is value display filtered products else display unfiltered products */}
      {cat
        ? filteredProducts.map((item) => (
            <ProductsItem item={item} key={item._id}></ProductsItem>
          ))
        : products.map((item) => (
            <ProductsItem item={item} key={item._id}></ProductsItem>
          ))}
    </Section>
  );
}

export default Products;
