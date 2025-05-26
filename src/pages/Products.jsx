import React from "react";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const productsUrl = "/products";

const allProductsQuery = (queryParams) => {
  const { search, sort, page, category, price, company, shipping } =
    queryParams;
  return {
    queryKey: [
      "products",
      search ?? "",
      sort ?? "a-z",
      page ?? 1,
      category ?? "all",
      price ?? 100000,
      company ?? "all",
      shipping ?? false,
    ],
    queryFn: () => customFetch(productsUrl, { params: queryParams }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const resp = await queryClient.ensureQueryData(allProductsQuery(params));
    const products = resp.data.data;
    const meta = resp.data.meta;

    return { products, meta, params };
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
