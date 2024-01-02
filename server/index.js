import express from "express";
import cors from "cors";
import connectDB from "./db/connect.js";
import { userRouter } from "./routes/user.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use("/auth", userRouter);

app.get("/", (req, res) => {
  res.send("ok");
});

const port = 4000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
