import axios from "axios";

export const getProducts = (data) => ({
  type: "homepage/getProducts",
  payload: data,
});

export function getAllProducts() {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    // TODO:
    // make a POST API request to `/login`
    const response = await axios.get("http://localhost:4000/products");

    //console.log("what is response", response.data.result);

    const products = response.data.result;
    dispatch(getProducts(products));
  };
}
