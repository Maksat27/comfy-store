import React from "react";
import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta } = useLoaderData();
  console.log(meta);

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Search */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      />
      {/* Categories */}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
      />
      {/* Companies */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
      />
      {/* Order */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "low", "high"]}
        defaultValue="price-lowest"
        size="select-sm"
      />
      {/* Price */}
      <FormRange label="select price" name="price" size="range-sm" />

      {/* Free Shipping */}
      <FormCheckbox
        label="free shipping"
        name="shipping"
        defaultValue={false}
        size="checkbox-sm"
      />

      {/* Buttons */}
      <button type="button" className="btn btn-primary btn-sm">
        SEARCH
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        RESET
      </Link>
    </Form>
  );
};

export default Filters;
