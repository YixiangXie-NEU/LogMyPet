import { config } from "dotenv";
config();

export default {
  MONGO_URL: process.env.MONGO_URL,
  SESSION_SECRET: process.env.SESSION_SECRET,
  PORT: process.env.PORT,
};
