import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProductsGrid = () => {
  const { products } = useLoaderData();

  console.log(products);

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-neutral rounded-box shadow-md hover:shadow-2xl transition-shadow duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="h-[20rem] w-[20rem] object-cover rounded-box"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-lg font-bold tracking-wide capitalize">
                {title}
              </h2>
              <span className="text-secondary">${price}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
