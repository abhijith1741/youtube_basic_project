import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name: "chat",
    initialState:{
        values: []
    },
    reducers: {
        addChat: (state, action) => {
            state.values.splice(20,1)
            state.values.unshift(action.payload)
        }
    }
})

export const {addChat} = liveChatSlice.actions
export default liveChatSlice.reducer