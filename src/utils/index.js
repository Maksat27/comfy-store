import axios from "axios";

const productionUrl = `https://strapi-store-server.onrender.com/api/products`;

export const customFetch = axios.create({
  baseURL: productionUrl,
});

// export const fetchData = async () => {
//   try {
//     const resp = await axios.get(productionUrl);
//     const data = resp.data.data;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
