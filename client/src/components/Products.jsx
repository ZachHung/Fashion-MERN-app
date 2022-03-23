import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { publicRequest } from "../requestMethod";

const Container = styled.div`
  flex-wrap: wrap;
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat ? `/products?category=${cat}` : "/products"
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    switch (sort) {
      case "lastest": {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
        break;
      }
      case "priceAsc": {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
        break;
      }
      case "priceDesc": {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
        break;
      }
      default:
        setFilteredProducts((prev) => [...prev]);
    }
  }, [sort]);
  return (
    <Container>
      {cat
        ? filteredProducts.map((singleProduct) => (
            <Product key={singleProduct._id} item={singleProduct}></Product>
          ))
        : products
            .slice(0, 8)
            .map((singleProduct) => (
              <Product key={singleProduct._id} item={singleProduct}></Product>
            ))}
    </Container>
  );
};

export default Products;
