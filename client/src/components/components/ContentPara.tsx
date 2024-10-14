interface ContentParaIF {
  titleLabel: string;
  paraLabel: string;
}

const ContentPara:React.FC<ContentParaIF> = ({titleLabel,paraLabel}) => {
  return (
    <>
      <div className="flex flex-col w-full xl:w-[70%] xl:mt-4 gap-2">
        <label className="text-md font-medium">{titleLabel}</label>
        <input
          type="text"
          className="rounded-sm h-10 bg-black border border-neutral-700 hover:outline-none px-2"
        />
      </div>
      <div className="flex flex-col w-full xl:w-[70%] xl:mt-4 gap-2">
        <label className="text-md font-medium">
        {paraLabel}
        </label>
        <textarea
          rows={4}
          className="rounded-sm xl:h-56 bg-black border border-neutral-700 hover:outline-none px-2 text-start"
        ></textarea>
      </div>
    </>
  );
};

export default ContentPara;
