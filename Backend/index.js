import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import imagesRouter from "./routes/imagesRoutes.js";

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());

app.use("/image", imagesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Running on port");
});
