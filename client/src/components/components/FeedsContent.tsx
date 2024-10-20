import FeedsCommon from "./FeedsCommon";

interface FeedsPorpsIF {
  contentCategory: string;
}

const FeedsContent: React.FC<FeedsPorpsIF> = ({ contentCategory }) => {
  return (
    <div className="flex-grow min-h-screen bg-black text-white open-sans flex flex-row justify-center ">
      <div className="md:w-[80%] lg:w-[70%] xl:w-[60%] bg-neutral-950">
        {/* <div className=" w-full h-10 max-sm:text-xs flex justify-end border-b items-center px-4 text-sm font-normal border-neutral-700">
          <h1>
            feeds - html - markup
          </h1>
          <div className="flex gap-4">
            <h1>7 min read</h1>
            <h1>Mar 17,2024</h1>
          </div>
        </div> */}
        <FeedsCommon contentCategory={contentCategory} />
      </div>
    </div>
  );
};

export default FeedsContent;
