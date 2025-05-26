import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { store } from "../Store";
import { customFetch, formatPrice } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/CartSlice";

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const { user } = store.getState().user;
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      queryClient.removeQueries(["orders"]);
      store.dispatch(clearCart());
      toast.success("Order placed successfully");
      return redirect("/orders");
    } catch (error) {
      if (error?.response?.status === 401 || 403) {
        toast.error("Your token has expired, please login again");
        return redirect("/login");
      }
      console.log(error);
      const errorMessage =
        error.response?.data?.error?.message ||
        "There was an error placing your order";
      toast.error(errorMessage);
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">shipping information</h4>
      <FormInput
        type="text"
        label="fist name"
        name="name"
        size="w-full input-lg"
      />
      <FormInput
        type="text"
        label="address"
        name="address"
        size="w-full input-lg"
      />
      <div className="mt-4">
        <SubmitBtn text="place order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
