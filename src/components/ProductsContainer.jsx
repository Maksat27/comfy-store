import React, { useState } from "react";
import ProductLists from "./ProductsLists";
import ProductsGrid from "./ProductsGrid";
import { useLoaderData } from "react-router-dom";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;

  const [isGridView, setIsGridView] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === isGridView
        ? "btn-primary text-primary-content"
        : "btn-ghost text-based-content"
    }`;
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && "s"} found
        </h4>

        {/* View buttons */}
        <div className="flex gap-x-2 ">
          <button
            type="button"
            className={setActiveStyles("grid")}
            onClick={() => setIsGridView("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            className={setActiveStyles("list")}
            onClick={() => setIsGridView("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* Products */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">Sorry, no products were found</h5>
        ) : isGridView === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductLists />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
