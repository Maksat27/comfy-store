import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const url = `/products?featured=true`;

export const loader = async () => {
  try {
    const resp = await customFetch(url);
    const products = resp.data.data;
    return { products };
  } catch (error) {
    console.log(error);
  }
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
