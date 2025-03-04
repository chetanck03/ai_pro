import { UserModel, type User, type InsertUser } from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | null>;
  getUserByUsername(username: string): Promise<User | null>;
  createUser(user: InsertUser): Promise<User>;
}

export class MongoStorage implements IStorage {
  async getUser(id: string): Promise<User | null> {
    return await UserModel.findById(id);
  }

  async getUserByUsername(username: string): Promise<User | null> {
    return await UserModel.findOne({ username });
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user = new UserModel(insertUser);
    return await user.save();
  }
}

export const storage = new MongoStorage();