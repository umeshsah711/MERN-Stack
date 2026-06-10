// import orderService from "../services/order.service.js";

// const getOrder = async (req, res) => {
//   try {
//     const data = await orderService.getOrder();

//     res.json(data);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

// const orderPaymentViaKhalti = async (req, res) => {
//   try {
//     const data = await orderService.orderPaymentViaKhalti(
//       req.params.id,
//       req.user,
//     );

//     res.json(data);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

// const conformOrderPayment = async (req, res) => {
//   if (!req.body?.status)
//     return res.status(400).send("Payment status is required");
//   try {
//     const data = await orderService.orderPaymentViaKhalti(
//       req.params.id,
//       req.body.status,
//     );

//     res.json(data);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

// const createOrder = async (req, res) => {
//   try {
//     const data = await orderService.createOrder(req.body, req.user._id);

//     res.status(201).json(data);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

// export default {
//   createOrder,
//   getOrder,
//   orderPaymentViaKhalti,
//   conformOrderPayment,
// };

import orderService from "../services/order.service.js";

const getOrder = async (req, res) => {
  try {
    const data = await orderService.getOrder();
    res.json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateOrder = async (req, res) => {
  try {
    const data = await orderService.updateOrder();
    res.json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const orderPaymentViaKhalti = async (req, res) => {
  try {
    const data = await orderService.orderPaymentViaKhalti(
      req.params.id,
      req.user,
    );

    res.json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const conformOrderPayment = async (req, res) => {
  if (!req.body?.status) {
    return res.status(400).send("Payment status is required");
  }

  try {
    const data = await orderService.conformOrderPayment(
      req.params.id,
      req.body.status,
    );

    res.json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createOrder = async (req, res) => {
  try {
    const data = await orderService.createOrder(req.body, req.user._id);

    res.status(201).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default {
  createOrder,
  getOrder,
  orderPaymentViaKhalti,
  conformOrderPayment,
  updateOrder,
};
