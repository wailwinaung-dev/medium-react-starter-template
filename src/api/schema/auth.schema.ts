import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email({ message: 'Invalid email address' }).trim(),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(100)
    .trim()
});
