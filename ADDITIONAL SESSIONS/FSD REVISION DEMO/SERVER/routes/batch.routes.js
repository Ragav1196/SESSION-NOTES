import express from "express";
import { service } from "../services/batch.services.js";

const route = express.Router();

route.get("/", service.getBatch);

route.post("/", service.addBatch);

route.put("/:id", service.updateBatch);

route.delete("/:id", service.deleteBatch);

export { route };
