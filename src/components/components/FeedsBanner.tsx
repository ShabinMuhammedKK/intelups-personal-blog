import { RiCloseLargeFill } from "@remixicon/react";

interface BannerProps {
  closeBanner: () => void;
}

const FeedsBanner: React.FC<BannerProps> = ({ closeBanner }) => {
  return (
    <div>
      <div className=" relative bg-gradient-to-tr from-violet-500 to-blue-500  h-9 w-full flex justify-center items-center text-white open-sans text-xs">
        <h1>
          Stay in the loop! Subscribe now for immediate updates on my latest
          content.
        </h1>
        <button className="px-2 py-1 ml-3 rounded bg-white text-black">
          Subscribe
        </button>
        <button className="absolute right-10" onClick={closeBanner}>
          <RiCloseLargeFill size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default FeedsBanner;
