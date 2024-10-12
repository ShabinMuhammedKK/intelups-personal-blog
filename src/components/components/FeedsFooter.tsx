const FeedsFooter = () => {
  return (
    <div className="h-auto xl:h-[16rem] flex flex-col justify-between items-center border-t border-neutral-700 bg-black text-white py-5">
      <div className="w-full h-[80%] flex justify-center items-center py-4">
        <form
          action=""
          className="flex flex-col md:flex-row md:justify-center md:items-end justify-end items-center gap-3"
        >
          <div className="flex flex-row items-center h-full border rounded-[2px] border-neutral-700">
            <div className="h-full flex">
              <label className="text-sm open-sans px-2 h-10 text-white bg-neutral-700 flex items-center border-r border-neutral-700">
                Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="h-10 focus:outline-none px-2 rounded-[2px] placeholder:text-neutral-600 bg-black open-sans"
              />
            </div>
          </div>
          <div className="flex flex-row items-center h-full border rounded-[2px] border-neutral-700">
            <div className="h-full flex">
              <label className="text-sm open-sans px-2 h-10 text-white bg-neutral-700 flex items-center border-r border-neutral-700">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="h-10 focus:outline-none px-2 rounded-[2px] placeholder:text-neutral-600 bg-black open-sans"
              />
            </div>
          </div>
          <button
            type="submit"
            className="open-sans h-10 sm:text-sm border border-neutral-700 bg-neutral-700 text-white px-6 rounded-[2px]"
          >
            Join
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center text-xs bg-black text-gray-400 ">
        <p>Copyright © 2024 Shdotin - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default FeedsFooter;
