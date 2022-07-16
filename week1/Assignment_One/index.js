import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

// require("dotenv").config();

import InventoryRouter from "./routes/InventoryRoute.js";

const app = express();
const PORT_NUMBER = 5000;

app.use(express.json());
app.use(morgan("dev"));

// Defining The Routes.
app.use("/inventory", InventoryRouter);

const user_name = process.env.USER_NAME;
const password = process.env.PASSWORD;

// Mongodb Connection String.
const URL_CONNECTION_STRING = `mongodb+srv://${user_name}:${encodeURIComponent(
  "Hasan@3135Hasan@3135"
)}@cluster-fsw-135.qrrngnu.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(URL_CONNECTION_STRING)
  .then(() =>
    app.listen(PORT_NUMBER, () =>
      console.log(`Application Connected And Running On Port ${PORT_NUMBER}`)
    )
  )
  .catch((error) => console.log(error));
