import { Response, Request } from "express";
import { StatusCode } from "../constents";
import { Article } from "../models/articeModel";

//add | delete | edit

export const addArticle = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      title,
      thumbnail,
      description,
      category,
      readingTime,
      mainContentTitle,
      mainPara,
      subTitle1,
      paragraph1,
      subTitle2,
      paragraph2,
    } = req.body;

    if (
      !title ||
      !thumbnail ||
      !description ||
      !category ||
      !readingTime ||
      !mainContentTitle ||
      !mainPara
    ) {
      res
        .status(StatusCode.BAD_REQUEST)
        .json({ success: false, message: "more data required" });
    } else {
      const articeData = new Article({
        title,
        thumbnail,
        description,
        category,
        readingTime,
        mainContentTitle,
        mainPara,
        subTitle1,
        paragraph1,
        subTitle2,
        paragraph2,
      });

      const savedArticle = await articeData.save();
      if (savedArticle)
        res
          .status(StatusCode.OK)
          .json({ success: true, message: "article created" });
      else
        res
          .status(StatusCode.INTERNAL_SERVER_ERROR)
          .json({ success: false, message: "new article failed" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(StatusCode.INTERNAL_SERVER_ERROR)
      .json({ success: true, message: "internal server error" });
  }
};

export const getAllArticles = async (req: Request, res: Response) => {
  try {
    const allArticles = await Article.find().sort({ updatedAt: -1 });
    res
      .status(StatusCode.OK)
      .json({ success: true, data: allArticles, message: "got article data" });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCode.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: "internal server error" });
  }
};

export const deleteArticle = async (req: Request, res: Response) => {
  try {
    const articleID = req.params;
    const deleteArticle = await Article.findOneAndDelete({ _id: articleID.id });
    if (deleteArticle)
      res
        .status(StatusCode.OK)
        .json({ success: true, message: "article deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCode.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: "internal server error" });
  }
};
