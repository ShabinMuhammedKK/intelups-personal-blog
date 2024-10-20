/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

interface ContentParaIF {
  titleLabel: string;
  paraLabel: string;
  e?: React.ChangeEvent<HTMLInputElement>;
  handleParagrphData: (value: content) => void;
}
interface content {
  title: string;
  para: string;
}

const ContentPara: React.FC<ContentParaIF> = ({
  titleLabel,
  paraLabel,
  handleParagrphData,
}) => {
  const [data, setData] = useState<content>({ title: "", para: "" });

  useEffect(() => {
    handleParagrphData(data);
  }, [data]);

  return (
    <>
      <div className="flex flex-col w-full xl:w-[70%] xl:mt-4 gap-2">
        <label className="text-md font-medium">{titleLabel}</label>
        <input
          value={data.title}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
          type="text"
          className="rounded-sm h-10 bg-black border border-neutral-700 hover:outline-none px-2"
        />
      </div>
      <div className="flex flex-col w-full xl:w-[70%] xl:mt-4 gap-2">
        <label className="text-md font-medium">{paraLabel}</label>
        <textarea
          value={data.para}
          onChange={(e) =>
            setData((prev) => ({ ...prev, para: e.target.value }))
          }
          rows={4}
          className="rounded-sm xl:h-56 bg-black border border-neutral-700 hover:outline-none px-2 text-start"
        ></textarea>
      </div>
    </>
  );
};

export default ContentPara;
