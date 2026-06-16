import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 50,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      lowerCase: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      minlength: 8,
      select: false,
      // we know :)
    },
    role: {
      type: String,
      enum: ["customer", "seller", "admin"],
      default: "customer",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: { type: String, select: false },
    refreshToken: { type: String, select: false },
    resetToken: { type: String, select: false },
    resetExpires: { type: Date, select: false },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
