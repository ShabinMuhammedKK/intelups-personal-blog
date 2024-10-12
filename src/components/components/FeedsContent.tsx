import FeedsCommon from "./FeedsCommon";

const FeedsContent = () => {
  return (
    <div className="flex-grow bg-black h-screen text-white open-sans flex flex-row justify-center">
      <div className="md:w-[60%] bg-neutral-950 h-screen">
        <h1 className="w-full h-10 flex justify-start items-center px-4 text-sm font-normal border-neutral-700">
          feeds - html - markup
        </h1>
        <FeedsCommon/>
      </div>
    </div>
  );
};

export default FeedsContent;
