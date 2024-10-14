import { RiPencilFill, RiDeleteBin6Fill } from "@remixicon/react";

const UploadedContent = () => {
  return (
    <div className="flex justify-center items-start mt-3 open-sans">
      <div className="border xl:w-[60%] border-neutral-700 bg-neutral-950 rounded-sm xl:h-60 lg:w-[80%] md:w-full p-2 sm:w-full max-md:mx-4">
        <div className="flex flex-row max-md:gap-3 w-full  h-full justify-between items-center p-2 max-md:flex max-md:flex-col">
          <section className="border md:h-40 lg:h-48 max-md:h-40 bg-red-500 sm:w-[60%] max-sm:w-full xl:w-4/12 border-neutral-700 rounded-sm ">
            thumbnail
          </section>
          <section className="max-md:gap-3  h-full w-7/12 max-md:w-full flex-col justify-evenly">
            <div className="flex justify-start items-center w-full py-3  px-4 text-xl font-medium   md:h-[60%] max-md:h-40">
              <h1 className="truncate text-wrap">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
            <div className="flex justify-start w-full px-4 text-sm">
              <h1>Lorem, ipsum dolor sit amet consectetur</h1>
            </div>
            <div className="flex justify-start w-full px-4 text-sm font-light xl:gap-3">
              <h1>7 min reads</h1>
              <h1>Mar 17, 2024</h1>
            </div>
          </section>
          <section className="h-full w-1/12  flex justify-end items-start gap-3">
            <button>
              <RiPencilFill className="text-blue-400 bg-neutral-900 h-8 w-8 mt-2 p-1 rounded-sm" />
            </button>
            <button>
              <RiDeleteBin6Fill className="text-red-500 bg-neutral-900 h-8 w-8 mt-2 p-1 rounded-sm" />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UploadedContent;
