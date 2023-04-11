//const mongoose = require("mongoose");
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    //unique: true,
    trim: true,
    lowercase: true,
    /**validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },**/
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
});

// Model
const User = mongoose.model("user", UserSchema, "users");
export default User;
