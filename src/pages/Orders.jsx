import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import {
  OrdersList,
  ComplexPaginationContainer,
  SectionTitle,
} from "../components";
import { meta } from "@eslint/js";

export const loader =
  (store) =>
  async ({ request }) => {
    const { user } = store.getState().user;

    if (!user) {
      toast.warning("Please login to view your orders");
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await customFetch("/orders", {
        params,
        headers: { Authorization: `Bearer ${user.token}` },
      });
      console.log(response);

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.error?.message ||
        "There was an error placing your order";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
      return null;
    }
  };
const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle title="Please, make an order" />;
  }
  return (
    <>
      <SectionTitle title="Your Orders" />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};

export default Orders;
