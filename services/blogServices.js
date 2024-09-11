import BlogModel from "../../model/blog/blog.model.js";
import {
  createItem,
  updateItem,
  deleteItem,
  getSingleData,
} from "../../helper/service-helper";

// ব্লগ তৈরি করা
const createBlogService = async (payload) => {
  return await createItem(BlogModel, payload);
};

// ব্লগ আপডেট করা
const updateBlogService = async (id, data) => {
  return await updateItem(BlogModel, id, data);
};

// ব্লগ ডিলিট করা
const deleteBlogService = async (id) => {
  return await deleteItem(BlogModel, id);
};

// সিঙ্গেল ব্লগ পাওয়া
const getSingleBlogService = async (identify) => {
  const query = { _id: identify }; // ID এর মাধ্যমে খোঁজা হচ্ছে
  return await getSingleData(BlogModel, query);
};

// একাধিক ব্লগ পাওয়া
const getAllBlogService = async ({
  page,
  limit,
  filter,
  sortField,
  sortOrder,
}) => {
  const blogs = await BlogModel.find(filter)
    .sort({ [sortField]: sortOrder })
    .skip((page - 1) * limit)
    .limit(limit)
    .exec();

  return blogs;
};

export const blogService = {
  createBlogService,
  updateBlogService,
  deleteBlogService,
  getSingleBlogService,
  getAllBlogService,
};
