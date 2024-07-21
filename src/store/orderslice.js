import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setOrder = createAsyncThunk(
  "setorder",
  async (data, { rejectWithValue }) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/order/creatorder",
        {
          userId: data.userId,
        }
      );
      const result = response.data;
      return result;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch user token");
    }
  }
);

const setReview = createAsyncThunk(
  "setreview",
  async (data, { rejectWithValue }) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/product/review",
        {
          productId: data.productId,
          text: data.text,
          rating: data.rating,
          orderId : data.orderId
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${data.token}`,
            }
        }
      );
      const result = response.data; // Correctly access the response data
      return result;
    } catch (error) {
      // Reject with the actual error
      return rejectWithValue(error.message || "Failed to fetch user token");
    }
  }
);


const getOrder = createAsyncThunk(
  "getorder",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/order/getorders",
        {
          userId: data.userId,
        }
      );
      const result = response.data;
      return result;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch user token");
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderitems: [],
    massage: "",
    rmassage : "",
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(setOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(setOrder.fulfilled, (state, action) => {
      state.massage = action.payload;
      state.loading = false;
    });
    builder.addCase(setOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });


    builder.addCase(setReview.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(setReview.fulfilled, (state, action) => {
      state.rmassage = action.payload.massage;
      state.orderitems = action.payload.data
      state.loading = false;
      console.log(action.payload)
    });
    builder.addCase(setReview.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });


    builder.addCase(getOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.orderitems = action.payload;
      state.loading = false;
    });
    builder.addCase(getOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export { setOrder, getOrder , setReview};
export default orderSlice;
