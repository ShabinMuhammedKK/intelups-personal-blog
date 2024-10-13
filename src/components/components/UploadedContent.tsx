import { RiPencilFill, RiDeleteBin6Fill } from "@remixicon/react";

const UploadedContent = () => {
  return (
    <div className="flex justify-center items-start mt-3 open-sans">
      <div className="border xl:w-[60%] border-neutral-700 bg-neutral-950 rounded-sm xl:h-60">
        <div className="flex flex-row w-full h-full justify-between items-center p-2">
          <section className="border h-full w-4/12 border-neutral-700 rounded-sm">
            thumbnail
          </section>
          <section className="flex  h-full w-7/12 flex-col justify-evenly items-center">
            <div className="flex justify-start w-full px-4 text-xl font-medium">
              <h1>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                enim quas possimus itaque voluptatum dolore voluptate ut iusto
                veniam, eveniet reiciendis impedit.
              </h1>
            </div>
            <div className="flex justify-start w-full px-4 text-sm">
              <h1>Lorem, ipsum dolor sit amet consectetur</h1>
            </div>
            <div className="flex justify-start w-full px-4 text-sm font-light">
              <h1>7 min reads Mar 17, 2024</h1>
            </div>
          </section>
          <section className="h-full w-1/12  flex justify-end items-start gap-3">
            <button>
              <RiPencilFill className="text-blue-400 bg-neutral-700 h-8 w-8 mt-2 p-1 rounded-sm" />
            </button>
            <button>
              <RiDeleteBin6Fill className="text-red-500 bg-neutral-700 h-8 w-8 mt-2 p-1 rounded-sm" />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UploadedContent;
