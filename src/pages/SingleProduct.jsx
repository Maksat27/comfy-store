import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  customFetch,
  formatPrice,
  generateAmountOptions,
} from "../utils/index";

export const loader = async ({ params }) => {
  const resp = await customFetch(`products/${params.id}`);
  return { product: resp.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;

  const dollarAmount = formatPrice(price);

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  return (
    <section>
      {/* Breadcrumbs */}
      <div className="breadcrumbs text-md">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* End Breadcrumbs */}

      {/* Product Display */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* Product Info */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* Colors */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6  mr-2 ${
                      productColor === color && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* Amount */}
          <div className="form-control w-full max-w-xs mt-5">
            <label className="label" htmlFor="amount">
              <h4 className="text-md font-medium text-white tracking-wider capitalize mb-2">
                amount
              </h4>
            </label>
            <select
              id="amount"
              className="select select-secondary select-bordered select-md"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(10)}
            </select>
          </div>
          {/* Cart Btn */}
          <div className="mt-10">
            <button
              className="btn btn-secondary btn-md"
              onClick={() => {
                console.log("add to bag");
              }}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// const SingleProduct = () => {
//   const { image, title, price, description, colors, company } = useLoaderData();

//   const dollarAmount = formatPrice(price);
//   const [productColor, setProductColor] = useState();
//   const [amount, setAmount] = useState(1);

//   const handleAmount = (e) => {
//     setAmount(e.target.value);
//   };

//   return (
//     <section>
//       {/* Breadcrumb Navigation */}
//       <ul className="flex items-center space-x-2">
//         <li>
//           <Link to="/" className="hover:underline text-blue-600">
//             Home
//           </Link>
//         </li>
//         <li>/</li>
//         <li>
//           <Link to="/products" className="hover:underline text-blue-600">
//             Products
//           </Link>
//         </li>
//       </ul>
//       {/* End Breadcrumb Navigation */}

//       {/* Product Display */}
//       <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
//         <figure>
//           <img src={image} alt={title} className="rounded-lg h-80 w-md " />
//         </figure>
//         <div>
//           <h2 className="text-3xl font-bold capitalize">{title}</h2>
//           <h4 className="text-1xl font-semibold mt-2">{company}</h4>
//           <h4 className="text-1xl mt-2">{dollarAmount}</h4>
//           <p className="mt-5 tracking-wide leading-7">{description}</p>
//           <div className="mt-10">
//             {/* Color Selection */}
//             <h4 className="text-1xl font-semibold mt-2">Colors</h4>
//             {colors.map((color, index) => {
//               return (
//                 <button
//                   key={index}
//                   className={`w-6 h-6 rounded-full mr-2 mt-2`}
//                   style={{ backgroundColor: color }}
//                   onClick={() => setProductColor(color)}
//                 ></button>
//               );
//             })}
//             {/* End Color Selection */}

//             {/* Amount Selection */}
//             <div className="mt-5 grid grid-rows-2">
//               <p className="font-semibold capitalize">amount</p>
//               <select className="select select-primary" onClick={handleAmount}>
//                 <option value={1}>1</option>
//                 <option value={2}>2</option>
//                 <option value={3}>3</option>
//                 <option value={4}>4</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End Product Display */}
//     </section>
//   );
// };

export default SingleProduct;
