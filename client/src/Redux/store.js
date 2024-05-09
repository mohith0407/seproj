import {configureStore} from "@reduxjs/toolkit"
import AuthSliceReducer from "./Slices/AuthSlice"
import CourseSliceReducer from "./Slices/CourseSlice"
// import RazorpaySliceReducer from "./Slices/RazorpaySlice"
import LectureSliceReducer from "./Slices/LectureSlice"
// import StatSliceReducer from "./Slices/StatSlice"

 const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        course: CourseSliceReducer,
        lecture: LectureSliceReducer,
    },
    devTools: true
})

export default store