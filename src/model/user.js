import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is requiered"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is requiered"],
    unique: true,
    match: [/.+\@.+\..+/, "Please use a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifyCode: {
    type: String,
    required: [true, "Verify Code Expired is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessages: {
    type: Boolean,
    default: true,
  },
  messges: [MessageSchema],
});

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;
