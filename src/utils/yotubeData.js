import { createSlice } from "@reduxjs/toolkit";

const youtubeData = createSlice({
    name: "videos",
    initialState: {
        videos: []
    },
    reducers: {
        addVideos: (state, action) => {
            state.videos = action.payload
        }
    }
})

export const {addVideos} = youtubeData.actions
export default youtubeData.reducer