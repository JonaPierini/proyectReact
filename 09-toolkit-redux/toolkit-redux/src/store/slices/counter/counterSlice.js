import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 10,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = state.count;
    },
    incrementByAmoutn: (state, action) => {
      //Es para mandarle argumentos
      state.count += action.payload;
    },
    prueba: (state, action) => {
      console.log(state, action);
    },
  },
});

// Las acciones si bien no estan en el objeto la funcion createSlice las tiene
//Action creators are generated for each case reducer function
export const { increment, decrement, reset, incrementByAmoutn, prueba } =
  counterSlice.actions;
