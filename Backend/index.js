import express from "express";
import cors from "cors";
import imagesRouter from "./routes/imagesRoutes.js";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/image", imagesRouter);

app.listen(3000, () => {
  console.log("Running on port");
});
