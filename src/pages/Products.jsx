import React from "react";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const productsUrl = "/products";

export const loader = async ({ request }) => {
  const resp = await customFetch(productsUrl);
  const products = resp.data.data;
  const meta = resp.data.meta;

  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
