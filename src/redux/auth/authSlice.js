
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
//   isAuthenticated: false,

//   // OTP flow
//   otpFlow: null,
// };

// const authSlice = createSlice({
//   name: 'auth',

//   initialState,

//   reducers: {

//     setUser: (state, action) => {
//       state.user = action.payload;
//       state.isAuthenticated = true;
//     },

//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//     },

//     // Signup ya Forgot Password flow set karega
//     setOtpFlow: (state, action) => {
//       state.otpFlow = action.payload;
//     },

//     // OTP process complete hone par clear karega
//     clearOtpFlow: (state) => {
//       state.otpFlow = null;
//     },

//   },
// });

// export const {
//   setUser,
//   logout,
//   setOtpFlow,
//   clearOtpFlow,
// } = authSlice.actions;

// export default authSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
//   token:null,
//   isAuthenticated: false,
//   otpFlow: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,

//   reducers: {

//     setUser: (state, action) => {
//       state.user = action.payload;
//       state.isAuthenticated = true;
//     },

//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//       state.otpFlow = null;
//     },

//     setOtpFlow: (state, action) => {
//       state.otpFlow = action.payload;
//     },

//     clearOtpFlow: (state) => {
//       state.otpFlow = null;
//     },

//   },
// });

// export const {
//   setUser,
//   logout,
//   setOtpFlow,
//   clearOtpFlow,
// } = authSlice.actions;

// export default authSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
//   token: null,
//   isAuthenticated: false,
//   otpFlow: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,

//   reducers: {
//     setUser: (state, action) => {
//       const payload = action.payload;

//       state.user = payload?.user ?? payload;
//       state.token =
//         payload?.token ??
//         payload?.access_token ??
//         payload?.data?.token ??
//         null;

//       state.isAuthenticated = Boolean(state.token);
//     },

//     logout: state => {
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//       state.otpFlow = null;
//     },

//     setOtpFlow: (state, action) => {
//       state.otpFlow = action.payload;
//     },

//     clearOtpFlow: state => {
//       state.otpFlow = null;
//     },
//   },
// });

// export const {
//   setUser,
//   logout,
//   setOtpFlow,
//   clearOtpFlow,
// } = authSlice.actions;

// export default authSlice.reducer;




import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  otpFlow: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = Boolean(action.payload.token);
    },

    logout: state => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.otpFlow = null;
    },

    setOtpFlow: (state, action) => {
      state.otpFlow = action.payload;
    },

    clearOtpFlow: state => {
      state.otpFlow = null;
    },
  },
});

export const {
  setUser,
  logout,
  setOtpFlow,
  clearOtpFlow,
} = authSlice.actions;

export default authSlice.reducer;
