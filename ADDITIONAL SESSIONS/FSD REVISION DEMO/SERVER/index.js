import express from "express";
import { mongo } from "./mongo.js";
import { route as batchRoute } from "./routes/batch.routes.js";

(async () => {
  try {
    const app = express();

    app.use(express.json());

    // MongoDB collection
    await mongo.connect();

    app.use("/batch", batchRoute);

    app.listen(9000, () => console.log("Server running at 9000"));
  } catch (error) {
    console.error("Error starting app");
  }
})();
