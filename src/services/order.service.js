import Order from "../models/Order.js";
import crypto from "crypto";

const getOrder = async () => {
  return await Order.find().populate("user", "name email phone");
};

const createOrder = async (data, userId) => {
  const orderNumber = crypto.randomUUID();
  return await Order.create({ ...data, user: userId, orderNumber });
};

const orderPaymentViaKhalti = async (id, user) => {
  const order = await getOrderById(id);

  const transactionId = crypto.randomUUID();

  const orderPayment = await Payment.create({
    method: "ONLINE",
    amount: order.totalPrice,
  });

  await Order.findByIdAndUpdate(id, {
    payment: orderPayment._id,
  });

  return await payViaKhalti({
    amount: order.totalPrice,
    purchaseOrderId: order.orderNumber,
    purchaseOrderName: order.orderItems[0].product.name,
    customer: order.user,
  });
};

const conformOrderPayment = async (id, status) => {
  const order = await getOrderById(id);

  if (status.toUppercase() !== "COMPLETED") {
    await Payment.findByIdAndUpdate(order.payment, {
      status: "FAILED",
    });
    throw {
      status: 400,
      message: "Payment failed",
    };
  }
  await Payment.findByIdAndUpdate(order.payment, {
    status: "SUCCESS",
  });
  return await Order.findByIdAndUpdate(
    id,
    {
      status: ORDER_STATUS_CONFORMED,
    },
    { new: true },
  );
};

export default {
  createOrder,
  getOrder,
  orderPaymentViaKhalti,
  conformOrderPayment,
};
