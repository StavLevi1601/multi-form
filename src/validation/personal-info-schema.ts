import z from "zod";

export const personalInfoSchema = z.object({
  name: z.string().min(2, { message: "Name must be valid." }),
  emailAddress: z.string().email({ message: "Email must be valid." }),
  phoneNumber: z
    .string()
    .min(8, { message: "Phone number must be valid." })
    .max(15, { message: "Phone number must be valid." }),
});

export type PersonalInfoSchema = z.infer<typeof personalInfoSchema>;
