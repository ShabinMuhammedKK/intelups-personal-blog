import express, { Express } from "express";
import dotenv from "dotenv";
import connectDB from "./dbConnection";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";
import cookieParser from "cookie-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL;

if (!dbUrl) throw new Error("Database URL is not defined");

app.use(cors({ origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE",credentials:true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB(dbUrl);

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.listen(port, () => {
  console.log(`[server]: Server running at http://localhost:${port}`);
});
