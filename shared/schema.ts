import { Schema, model, Document } from 'mongoose';
import { z } from "zod";

// User Schema Definition
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Zod Schema for validation
export const insertUserSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// TypeScript Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export interface User extends Document {
  id: string;
  username: string;
  password: string;
  createdAt: Date;
}

// Export the model
export const UserModel = model<User>('User', userSchema);