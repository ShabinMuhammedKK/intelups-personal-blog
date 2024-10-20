import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    readingTime: {
      type: Number,
      required: true,
    },
    mainContentTitle: {
      type: String,
      required: true,
    },
    mainPara: {
      type: String,
      require: true,
    },
    subTitle1: {
      type: String,
      required: false,
    },
    paragraph1: {
      type: String,
      required: false,
    },
    subTitle2: {
      type: String,
      required: false,
    },
    paragraph2: {
      type: String,
      required: false,
    },
    subTitle3: {
      type: String,
      required: false,
    },
    paragraph3: {
      type: String,
      required: false,
    },
    subTitle4: {
      type: String,
      required: false,
    },
    paragraph4: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const Article = mongoose.model("Article", ArticleSchema);
