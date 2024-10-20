import { ALL_ARTICLES, DELETE_ARTICLE } from "@/constants";
import { useEffect, useState } from "react";
import AdminRecentUploaded from "./AdminRecentUploaded";

interface ArticleIF {
  _id: string;
  title: string;
  thumbnail: string;
  description: string;
  category: string;
  readingTime: number;
  mainContentTitle: string;
  mainPara: string;
  __v: number;
  updatedAt: string;
}

const UploadedContent: React.FC = () => {
  const [articles, setArticles] = useState<ArticleIF[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetchAllArticles();
  }, []);

  const fetchAllArticles = async () => {
    try {
      const response = await fetch(ALL_ARTICLES);
      if (!response.ok) {
        throw new Error("failed to fetch articles");
      }
      const data = await response.json();
      setArticles(data.data);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleDeleteArticle = async (id: string) => {
    try {
      const deleteResponse = await fetch(`${DELETE_ARTICLE}/${id}`, {
        method: "DELETE",
      });
      const data = await deleteResponse.json();
      if (data.success) {
        setArticles((prev) => prev.filter((articles) => articles._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (error !== null) {
    return <div>{error}</div>;
  }
  return (
    <div className="flex flex-col gap-4 justify-start items-center mt-3 open-sans">
      {articles.length > 0 ? (
        articles.map((article, i) => (
          <AdminRecentUploaded
            items={article}
            i={i.toString()}
            key={i}
            handleDeleteArticle={handleDeleteArticle}
          />
        ))
      ) : (
        <div>
          <h1>Something went wrong!</h1>
        </div>
      )}
    </div>
  );
};

export default UploadedContent;
