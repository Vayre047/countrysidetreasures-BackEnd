const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    address: {
      type: String,
      required: [true, 'Address is required.']
    },
    city: {
      type: String,
      required: [true, 'City is required.']
    },
    zipCode: {
      type: String,
      required: [true, 'ZipCode is required.']
    },
    country: {
      type: String,
      required: [true, 'Country is required.']
    },
    mobile: {
      type: Number,
      required: [true, 'Number is required.']
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review'
      }
    ]       
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
