import React, { useState } from "react";
import ProductLists from "./ProductsLists";
import ProductsGrid from "./ProductsGrid";
import { useLoaderData } from "react-router-dom";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  console.log(meta);
  const paginationTotal = meta.pagination.total;

  return (
    <>
      <ProductLists />
      <ProductsGrid />
    </>
  );
};

export default ProductsContainer;
