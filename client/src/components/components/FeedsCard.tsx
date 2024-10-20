import { formatter } from "@/lib/utils";
import { RiShareLine, RiSave3Fill } from "@remixicon/react";


interface ArticleCardIF{
    items:{
        thumbnail: string;
    title: string;
    description: string;
    readingTime: number;
    updatedAt: string;
    },
    i:string;
}

const FeedsCard:React.FC<ArticleCardIF> = ({items,i}) => {
  return <div className="flex flex-row max-md:gap-3 w-full  h-full justify-between items-center p-2 max-md:flex max-md:flex-col">
  <section className="border md:h-40 lg:h-48 max-md:h-40 sm:w-[60%] max-sm:w-full xl:w-4/12 border-neutral-700 rounded-sm">
    <img
      src={`${items.thumbnail}${i}`}
      alt="thumbnail"
      className="object-cover object-center h-full w-full"
    />
  </section>
  <section className="max-md:gap-3  h-full w-7/12 max-md:w-full flex-col justify-evenly">
    <div className="flex justify-start items-center w-full py-3  px-4 text-xl font-medium   md:h-[60%] max-md:h-40">
      <h1 className="truncate text-wrap">{items.title}</h1>
    </div>
    <div className="flex justify-start w-full px-4 text-sm">
      <h1>{items.description}</h1>
    </div>
    <div className="flex justify-start w-full px-4 text-sm font-light xl:gap-3">
      <h1>{items.readingTime} min reads</h1>
      <h1>{formatter.format(new Date(items.updatedAt))}</h1>
    </div>
  </section>
  <section className="h-full w-1/12  flex justify-end items-start gap-3">
    <button>
      <RiShareLine className="text-green-500 bg-neutral-900 h-8 w-8 mt-2 p-1 rounded-sm" />
    </button>
    <button>
      <RiSave3Fill className="text-white bg-neutral-900 h-8 w-8 mt-2 p-1 rounded-sm" />
    </button>
  </section>
</div>;
};

export default FeedsCard;
