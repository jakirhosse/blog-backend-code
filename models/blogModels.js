import mongoose from "mongoose";
import metaInformationSchema from "../../helper/common-models/meta.information.js";
const { Schema } = mongoose;

// Blog এর জন্য Schema তৈরি করা
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    viewCount: {
      type: Number,
    },
    category: {
      _id: {
        type: Schema.Types.ObjectId,
        ref: "categories",
        required: true,
      },
      slug: {
        type: String,
        required: true,
        trim: true,
      },
      category: {
        type: String,
        required: true,
        trim: true,
      },
      parentCategoryId: {
        type: Schema.Types.ObjectId,
        ref: "categories",
        default: null,
      },
    },
    images: {
      imageUrl: { type: String, required: true },
      altText: { type: String, required: true },
      pathName: { type: String, required: true },
    },
    status: {
      type: String,
      enum: ["published", "draft", "pending"],
      default: "draft",
      index: true,
    },
    metaInformation: metaInformationSchema,
  },
  {
    timestamps: true,
  }
);

// Title ও content এর উপর টেক্সট সার্চের জন্য ইনডেক্স তৈরি করা
blogSchema.index({ title: "text", content: "text" });

// Blog মডেল তৈরি
const BlogModel = mongoose.model("blog", blogSchema);

export default BlogModel;
