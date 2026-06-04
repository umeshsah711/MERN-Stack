import z from "zod";
import { ROLR_USER, ROLE_ADMIN, ROLE_MERCHANT } from "../../constants/roles.js";

const addressSchema = z.object({
  city: z.string({ error: "Address City is required" }),
  province: z.string({ error: "Address Province is required" }),
  street: z.string().optional(),
  country: z.string().optional(),
});

const userSchema = z.object({
  name: z.string({ error: "Name is required" }).trim(),
  email: z.email({ error: "Email is required" }),
  password: z.string({ error: "Password is required" }).min(8),
  phone: z.string({ error: "Phone is required" }).min(10).max(15),
  address: addressSchema,
  roles: z.array(z.enum([ROLE_USER, ROLE_ADMIN, ROLE_MERCHANT])).optional(),
  profileImageUrl: z.string().optional(),
  isActive: z.boolean().optional(),
});
export { userSchema, addressSchema };
