import a from "zod";

const addressSchema = z.object({
  city: z.string({ error: "Shipping Address City is required" }),
  province: z.string({ error: "Shipping Address Province is required" }),
  street: z.string().optional(),
  country: z.string().optional(),
});

const orderSchema = z.object({
  orderItems: z.array(
    z.object({
      product: z.string({ error: "Product is required" }),
      quntity: z.number().default(1),
    }),
  ),
  totalPrice: z.number({ error: "Total price is required" }),
  shippingAddress: addressSchema,
});

export { orderSchema };
