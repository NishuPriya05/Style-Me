import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // Automatically log in after successful signup
        return await this.login({ email, password });
      }
      return null;
    } catch (error) {
      console.error("AuthService :: createAccount :: Error", error);
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("AuthService :: login :: Error", error);
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("AuthService :: getCurrentUser :: Error", error);
      return null; // Explicitly returning null on failure
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
      return true;
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
