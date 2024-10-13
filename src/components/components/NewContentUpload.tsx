import { RiFileUploadLine } from "@remixicon/react";
import ComboboxDemo from "./ComboBox";

const NewContentUpload = () => {
  return (
    <div className="bg-neutral-900 h-screen w-full mt-10 pb-20 flex flex-col items-center">
      <div className="bg-black xl:w-[70%] xl:h-[20rem] flex">
        <section className="w-1/3 border border-neutral-700 h-full flex flex-col items-center">
          <div className="flex flex-col w-full xl:w-[70%] xl:mt-4 gap-2">
            <label className="text-md font-medium">Title</label>
            <input
              type="text"
              className="rounded-sm h-10 bg-black border border-neutral-700 hover:outline-none px-2"
            />
          </div>
          <div className="flex flex-col w-full xl:w-[70%] xl:mt-4 gap-2">
            <label className="text-md font-medium">Thumbnail</label>
            <div className="rounded-sm h-32 bg-black border border-neutral-700 flex justify-center items-center">
              <div className="flex flex-col items-center">
                <RiFileUploadLine size={56} className="text-neutral-700" />
                <p className="text-neutral-700">Click here to upload</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-1/3 border border-neutral-700 border-x-0 h-full flex flex-col items-center">
          <div className="flex flex-col w-full xl:w-[70%] xl:mt-4 gap-2">
            <label className="text-md font-medium">
              Description <span className="text-neutral-500">(~20 words)</span>
            </label>
            <textarea
              rows={4}
              className="rounded-sm xl:h-56 bg-black border border-neutral-700 hover:outline-none px-2 text-start"
            ></textarea>
          </div>
        </section>
        <section className="w-1/3 border border-neutral-700 h-full flex flex-col items-center gap-3">
          <div className="flex flex-col gap-2 xl:mt-4 xl:w-[70%]">
            <label className="text-md font-medium">Category</label>
            <ComboboxDemo />
          </div>
          <div className="flex flex-col gap-2 xl:mt-4 xl:w-[70%]">
            <label className="text-md font-medium">Subcategory</label>
            <ComboboxDemo />
          </div>
          <div className="flex flex-col gap-2 xl:mt-4 xl:w-[70%]">
            <label className="text-md font-medium">Avg reading time</label>
            <ComboboxDemo />
          </div>
        </section>
      </div>
      <div className="bg-green-500 xl:w-[70%] flex-grow"></div>
      <div className="xl:h-[5rem] flex justify-start items-center">
        <button className="px-8 py-3 rounded-sm bg-neutral-700 hover:bg-green-500 font-medium">
          Publish
        </button>
      </div>
    </div>
  );
};

export default NewContentUpload;
