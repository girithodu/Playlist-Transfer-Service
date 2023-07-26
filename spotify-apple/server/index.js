import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { loginRouter } from "./routes/login.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const PORT = process.env.VITE_SERVER_PORT || 3000;
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/login", loginRouter);
app.listen(PORT);
console.log(`Server Listening on http://localhost:${PORT}`);
