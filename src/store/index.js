import { configureStore } from "@reduxjs/toolkit";

import allProductSlice from "./getdata.slice.js";
import setCatagorySlice from "./setcatagory.slice.js";
import setProductRenderSlice from "./setproductsrender.slice.js";
import setViewSlice from "./viewproduct.slice.js";
import cartSlice from "./cartslice.js";
import orderSlice from "./orderslice.js";
import userSlice from "./user.slice.js";
import reviewSlice from "./review.slice.js";

const store = configureStore({
  reducer: {
    allProducts : allProductSlice.reducer,
    setCategory : setCatagorySlice.reducer,
    setproductrender : setProductRenderSlice.reducer,
    viewproduct : setViewSlice.reducer,
    setcart : cartSlice.reducer,
    order : orderSlice.reducer,
    user : userSlice.reducer,
    review : reviewSlice.reducer
  },
});

export default store;
