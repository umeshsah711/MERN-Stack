import orderService from "../services/order.service.js";

const getOrder = (req, res) => {
    try {
        const data = await orderService.getOrder();

        res.json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const createOrder = (req, res) => {
    try {
        const data = await orderService.createOrder(req.body, req.user._id);

        res.status(201).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export default { createOrder, getOrder };