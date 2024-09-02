import { Schema, model, models } from "mongoose";
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      unique: false,
      required: false,
    },
    photo: {
      type: String,
      required: true,
    },
    firstname: { type: String },
    lastName: { type: String },
    password: {
      type: String,
      required: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    useBio: {
      type: String,
      default: "",
    },
    verificationToken: String,
    verificationExpires: Date,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  {
    timestamps: true,
  }
);
const User = models?.User || model("User", UserSchema);
export default User;
