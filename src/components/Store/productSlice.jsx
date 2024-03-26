import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      console.log("action", action);

      state.data = action.payload;
    },
  },
});

export const { fetchProducts } = productSlice.actions; // Corrected this line
export default productSlice.reducer;

export function getProducts() {
  return async function getProductsThunk(dispatch) {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json(); // Added await here
    console.log("result", result);
    dispatch(fetchProducts(result)); // Corrected this line
  };
}
