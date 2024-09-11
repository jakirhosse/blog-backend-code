import { blogService } from "../../services/blog/blog.service.js";

// ব্লগ তৈরি কন্ট্রোলার
const createBlogController = async (req, res, next) => {
  try {
    const payload = req.body;
    const response = await blogService.createBlogService(payload);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

// ব্লগ আপডেট কন্ট্রোলার
const updateBlogController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const payload = req.body;
    const response = await blogService.updateBlogService(id, payload);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

// ব্লগ ডিলিট কন্ট্রোলার
const deleteBlogController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await blogService.deleteBlogService(id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

// একক ব্লগ কন্ট্রোলার
const getSingleBlogController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await blogService.getSingleBlogService(id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

// একাধিক ব্লগ কন্ট্রোলার
const getAllBlogController = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 10,
      sortField = "createdAt",
      sortOrder = "desc",
    } = req.query;
    const filter = {}; // সার্চ ফিল্টার যোগ করতে পারেন
    const response = await blogService.getAllBlogService({
      page,
      limit,
      filter,
      sortField,
      sortOrder,
    });
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const blogController = {
  createBlogController,
  updateBlogController,
  deleteBlogController,
  getSingleBlogController,
  getAllBlogController,
};
