import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getFetchAllProduct = createAsyncThunk("getFetchAllProduct", async (data) => {
  const token = data
  console.log(data)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    "http://localhost:8000/api/product/getproduct",
    config
  );
  return response.data;
});

const allProductSlice = createSlice({
  name: "allProducts",
  initialState: {
    switch : "",
    loading: true,
    data: [],
    mobile :[],
    electronic :[],
    beauty : [],
    sport:[],
    grocery :[],
    fation :[],
    newlunchdata: [],
    toprateddata: [],
    foryoudata: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getFetchAllProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getFetchAllProduct.fulfilled, (state, action) => {
      state.data = action.payload;
      
      state.toprateddata = action.payload.sort((a, b) => a.rating - b.rating);
      
      state.newlunchdata = action.payload.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      /catagory section/ 
     console.log(action.payload.length)
     for(let i=0 ; i<action.payload.length;i++){

      if(action.payload[i].catagory == "grocery"){
        state.grocery.push(action.payload[i])
        continue;
      }

      if(action.payload[i].catagory == "mobile"){
        state.mobile.push(action.payload[i])
        continue;
      }

      if(action.payload[i].catagory == "electronic"){
        state.electronic.push(action.payload[i])
        continue;
      }

      if(action.payload[i].catagory == "fation"){
        state.fation.push(action.payload[i])
        continue;
      }

      if(action.payload[i].catagory == "sport"){
        state.sport.push(action.payload[i])
        continue;
      }

      if(action.payload[i].catagory == "beauty"){
        state.beauty.push(action.payload[i])
        continue;
      }
     }
      state.loading = false;
    });
    builder.addCase(getFetchAllProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
  reducers :{
    setData : (state , action)=>{
      state.switch = action.payload
    }
  }
});
export const { setData } = allProductSlice.actions
export { getFetchAllProduct };
export default allProductSlice;
