import { model, Schema } from "mongoose";

const courseSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: [true, 'Title is required'],
        minLength: [3, 'Title must be at least 3 character'],
        maxLength: [59, 'Title should be less than 60 character'],
        trim: true
    },
    description: {
        type: String,
        required: true,
        minLength: [3, 'Description must be at least 3 character'],
        maxLength: [500, 'Description should be less than 500 character'],
    },
  
 
    yt_video:{
        type: String
    }
},
    {
        timestamps: true
    })

const Course = model("Course", courseSchema);

export default Course