import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    active: false,
    all: false,
    messages: [],
  },
};

const chat = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    getActiveConversation: (state, action) => {
      state.value.active = action.payload;
    },
    getAllMessages: (state, action) => {
      state.value.active = [...state.value.messages, action.payload];
    },
  },
});
export const { getActiveConversation } = chat.actions;
export default chat.reducer;
