import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
// import router from "./routes/router.js";
const app: Application = express();
dotenv.config();

app.use(express.json());
app.use(cors());
// app.use("/api", router);
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    // await db.connect().catch((error: Error) => {
    //     console.log("Failed to connect to database", error);
    // });
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
