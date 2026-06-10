// import mongoose from "mongoose";
// import {
//   ORDER_STATUS_CANCELLED,
//   ORDER_STATUS_CONFIRMED,
//   ORDER_STATUS_DELIVERED,
//   ORDER_STATUS_SHIPPED,
// } from "../constants/OrderStatuses.js";

// const orderSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.ObjectId,
//     required: [true, "User is required"],
//     ref: "User",
//   },
//   orderItems: [
//     {
//       product: {
//         type: mongoose.Schema.ObjectId,
//         required: [true, "Product is required"],
//         ref: "Product",
//       },
//       quntity: {
//         type: Number,
//         default: 1,
//       },
//     },
//   ],
//   status: {
//     type: String,
//     default: ORDER_STATUS_PENDING,
//     enum: [
//       ORDER_STATUS_PENDING,
//       ORDER_STATUS_CONFORMED,
//       ORDER_STATUS_SHIPPED,
//       ORDER_STATUS_DELIVERED,
//       ORDER_STATUS_CANCELLED,
//     ],
//   },
//   shippingAddress: {
//     city: {
//       type: String,
//       required: [true, "Shipping address city is required"],
//     },
//     province: {
//       type: String,
//       required: [true, "Shipping address province is required"],
//     },
//     street: String,
//     country: {
//       type: String,
//       default: "Nepal",
//     },
//   },
//   totalPrice: {
//     type: Number,
//     required: [true, "Total price is required"],
//   },
//   orderNUmber: {
//     type: String,
//     required: [true, "Order number is required"],
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//     inmutable: true,
//   },
//   payment: {
//     type: mongoose.Schema.ObjectId,
//     ref: "Payment",
//   },
// });

// const model = mongoose.model("Order", orderSchema);

// export default model;

import mongoose from "mongoose";
import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_SHIPPED,
  ORDER_STATUS_PENDING,
} from "../constants/OrderStatuses.js";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User is required"],
    ref: "User",
  },

  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Product is required"],
        ref: "Product",
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],

  status: {
    type: String,
    default: ORDER_STATUS_PENDING,
    enum: [
      ORDER_STATUS_PENDING,
      ORDER_STATUS_CONFIRMED,
      ORDER_STATUS_SHIPPED,
      ORDER_STATUS_DELIVERED,
      ORDER_STATUS_CANCELLED,
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

  orderNumber: {
    type: String,
    required: [true, "Order number is required"],
    unique: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },

  payment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
  },
});

// optional but recommended
orderSchema.set("timestamps", true);

const Order = mongoose.model("Order", orderSchema);

export default Order;
