import x from "zod";

const productSchema = z.object({
  name: z.string({ error: "Product name is required" }),
  brand: z.string().optional(),
  category: z.string().optional(),
  price: z.number({ error: "Product price is required" }).min(1).max(999999),
  stock: z.number().min(1).optional(),
  imageUrl: z.array(z.string()),
});
export { productSchema };
