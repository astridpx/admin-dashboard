import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },

    last_name: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
    },
    gender: String,
    address: String,
    raw_password: String,
    hashed_password: String,
    role: {
      type: String,
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
