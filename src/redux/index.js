import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  data: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      const id = uuid();
      const newTodo = {
        id,
        name: actions.payload,
        isCompleted: false,
      };
      state.data = actions.payload ? [...state.data, newTodo] : [...state.data];
    },
    deleteTodo: (state, actions) => {
      state.data = state.data.filter((currElem) => {
        return actions.payload !== currElem.id;
      });
    },
    updateTodo: (state, actions) => {
      const { id, name, isCompleted } = actions.payload;
      console.log(id, name, isCompleted);
      state.data = state.data.map((currElem) => {
        if (currElem.id === id) {
          currElem.name = name;
          currElem.isCompleted = isCompleted;
        }
        return currElem;
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
