import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils/index";

const url = `/products?featured=true`;

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  try {
    const resp = await queryClient.ensureQueryData(featuredProductsQuery);
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
