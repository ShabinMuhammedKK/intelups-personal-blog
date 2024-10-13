import { RiFilter2Line, RiSearch2Line } from "@remixicon/react";
import UploadedContent from "./UploadedContent";

const RecenltlyUploaded = () => {
  return (
    <div className="flex flex-col min-h-screen gap-2">
      <section className="h-10 flex justify-end items-center xl:pr-10 pr-4 gap-5 md:mx-10 max-md:mx-5 mt-1">
        <span className="border md:w-[16rem] w-[8rem] max-md:w-full flex justify-between py-1 px-3 rounded-sm cursor-pointer gap-3 border-neutral-700">
          <p>
            <input
              type="text"
              className="bg-black text-white focus:outline-none"
              placeholder="Search"
            />
          </p>
          <RiSearch2Line />
        </span>
        <span>
          <RiFilter2Line />
        </span>
      </section>
      <section className="bg-neutral-900 flex-grow h-full pt-6 pb-20 w-full">
        <UploadedContent />
        <UploadedContent />
        <UploadedContent />
        <UploadedContent />
        <UploadedContent />
      </section>
    </div>
  );
};

export default RecenltlyUploaded;
