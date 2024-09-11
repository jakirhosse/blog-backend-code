import express from "express";
import { blogController } from "../controllers/blog.controller.js";

const blogRouter = express.Router();

blogRouter.post("/blog", blogController.createBlogController);
blogRouter.patch("/blog/:id", blogController.updateBlogController);
blogRouter.delete("/blog/:id", blogController.deleteBlogController);
blogRouter.get("/blog/:id", blogController.getSingleBlogController);
blogRouter.get("/blogs", blogController.getAllBlogController);

export default blogRouter;
