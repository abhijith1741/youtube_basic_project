import { configureStore } from "@reduxjs/toolkit";
import  menuReducer from "./menuSlice";
import searchReducer from "./searchSlice"
// import { menuSlice } from "./menuSlice";
import liveChatSlice from "./liveChatSlice"
import youtubeData from "./yotubeData"
const store = configureStore({
    reducer:{
        menu: menuReducer,
        search: searchReducer,
        chat: liveChatSlice,
        videos: youtubeData
    }
})

export default store