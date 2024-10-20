import { ALL_ARTICLES } from "@/constants";
import { useEffect, useState } from "react";
import FeedsCard from "./FeedsCard";

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
interface FeedsCommonProps {
  contentCategory: string;
}

const FeedsCommon: React.FC<FeedsCommonProps> = ({ contentCategory }) => {
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

  if (error !== null) {
    return <div>{error}</div>;
  }

  return (
    <div className="h-full w-full p-20 max-md:p-8 open-sans flex flex-col gap-10">
      <p>{contentCategory}</p>
      {articles.length > 0 ? (
        articles
          .filter((items) =>
            contentCategory === "All"
              ? true
              : items.category === contentCategory.toLowerCase()
          )
          .map((items, i) => (
            <div
              key={i}
              className="flex justify-center items-start mt-3 open-sans"
            >
              <div className="border xl:w-[100%] border-neutral-700 bg-neutral-950 rounded-sm xl:h-60 lg:w-[80%] md:w-full p-2 sm:w-full max-md:mx-4">
                <FeedsCard items={items} i={i.toString()} />
              </div>
            </div>
          ))
      ) : (
        <div>
          <h1>Something went wrong!</h1>
        </div>
      )}
    </div>
  );
};

export default FeedsCommon;
