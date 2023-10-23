import express from "express";
import { addPost } from "../cotrollers/post.js";
const router = express.Router()

router.get("/test", addPost)

export default router

