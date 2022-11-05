import { Router } from "express";
import { TodoEndpoint } from "./modules/todo";

export const router = Router();
router.use("/todo", TodoEndpoint);
