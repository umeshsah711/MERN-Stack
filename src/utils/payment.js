const axios = require("axios");
import axios from "axios";

const payViakhalti = async (data) => {
  const body = {
    return_url: config.appUrl,
    website_url: config.appUrl,
    amount: data.amount,
    purchase_order_id: data.purchaseOrderId,
    purchase_order_name: data.purchaseOrderName,
    customer_info: {
      name: data.customer.name,
      email: data.customer.email,
      phone: data.customer.phone,
    },
  };
  const response = await axios.post(config.khalti.apiUrl, body, {
    headers: {
      Authorization: `Key ${config.khalti.secretKey}`,
    },
  });
  return response.data;
};

export { payViakhalti };
