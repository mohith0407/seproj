import { Schema, model } from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [3, 'Name must be at least 5 character'],
        maxLength: [20, 'Name should be less than 20 character'],
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        lowercase: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [4, 'Password must be at least 4 character'],
        select: false
    },
    role: {
        type: String,
        default: 'USER',
        enum: ['USER', 'ADMIN']
    }
},
    {
        timestamps: true
    });


userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    return next();
});

userSchema.methods = {
    generateJWTToken: function () {
        return jwt.sign(
            { id: this._id, email: this.email, role: this.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRY }
        )
    },
}


export default model("User", userSchema);