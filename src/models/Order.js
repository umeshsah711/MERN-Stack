import mongoose from "mongoose";
import {
  ORDER_STSTUS_CANCELLED,
  ORDER_STSTUS_CONFORMED,
  ORDER_STSTUS_DELIVERED,
  ORDER_STSTUS_SHIPPED,
} from "../constants/OrderStatuses";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    required: [true, "User is required"],
    ref: "User",
  },
  orderItems: [
    {
      product: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Product is required"],
        ref: "Product",
      },
      quntity: {
        type: Number,
        default: 1,
      },
    },
  ],
  ststus: {
    type: String,
    default: ORDER_STSTUS_PENDING,
    enum: [
      ORDER_STSTUS_PENDING,
      ORDER_STSTUS_CONFORMED,
      ORDER_STSTUS_SHIPPED,
      ORDER_STSTUS_DELIVERED,
      ORDER_STSTUS_CANCELLED,
    ],
  },
  shippingAddress: {
    city: {
      type: String,
      required: [true, "Shipping address city is required"],
    },
    province: {
      type: String,
      required: [true, "Shipping address province is required"],
    },
    street: String,
    country: {
      type: String,
      default: "Nepal",
    },
  },
  totalPrice: {
    type: Number,
    required: [true, "Total price is required"],
  },
  orderNUmber: {
    type: String,
    required: [true, "Order number is required"],
  },
  credtedAt: {
    type: Date,
    default: Date.now(),
    inmutable: true,
  },
  payment: {
    type: mongoose.Schema.ObjectId,
    ref: "Payment",
  },
});

const model = mongoose.model("Order", orderSchema);

export default model;
