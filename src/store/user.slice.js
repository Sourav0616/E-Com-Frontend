import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userRegister = createAsyncThunk(
  "userrgeister",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/regester",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
            headers: {
                "Content-Type": "application/json"
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

const addUserAddaress = createAsyncThunk(
  "useraddaress",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/addaress",
        {
          adrs: data.adrs,
          city: data.city,
          ldmk: data.ldmk,
          dist: data.dist,
          mob: data.mob,
          pin: data.pin,
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

const userLogin = createAsyncThunk(
  "userlogin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        {
          email: data.email,
          password: data.password,
        },{
          headers: {
              "Content-Type": "application/json"
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

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: true,
    user: {},
    login: "",
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(userRegister.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });


    builder.addCase(addUserAddaress.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addUserAddaress.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(addUserAddaress.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });



    builder.addCase(userLogin.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.login = action.payload.accesstoken;
      state.user = action.payload;
      console.log(action.payload)
      state.loading = false;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export { userRegister, userLogin , addUserAddaress};
export default userSlice;
