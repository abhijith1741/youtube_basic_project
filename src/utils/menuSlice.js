import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        menuCheck: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.menuCheck = !state.menuCheck
        },
        changeToggle: (state) => {
            state.menuCheck = false
        }
    }
})

export const {toggleMenu, changeToggle} = menuSlice.actions
export default menuSlice.reducer