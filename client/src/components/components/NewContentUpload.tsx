import { UPLOAD_ARTICLE } from "@/constants";
import ComboboxDemo from "./ComboBox";
import ContentPara from "./ContentPara";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiCheckDoubleLine } from "@remixicon/react";

const category = [
  {
    value: "html",
    label: "HTML",
  },
  {
    value: "css",
    label: "CSS",
  },
  {
    value: "js",
    label: "Js",
  },
  {
    value: "react.js",
    label: "React.js",
  },
  {
    value: "node.js",
    label: "Node.js",
  },
  {
    value: "sql",
    label: "SQL",
  },
  {
    value: "nosql",
    label: "NoSQL",
  },
  {
    value: "others",
    label: "Others",
  },
];
const times = [
  {
    value: "5",
    label: "5 minutes",
  },
  {
    value: "8",
    label: "8 minutes",
  },
  {
    value: "10",
    label: "10 minutes",
  },
  {
    value: "15",
    label: "15 minutes",
  },
];

interface NewContentPorps {
  title: string;
  thumbnail: string;
  description: string;
  category: string;
  readingTime: number;
  mainContentTitle: string;
  mainPara: string;
}
interface content {
  title: string;
  para: string;
}

const NewContentUpload: React.FC<NewContentPorps> = () => {
  const [uploadArtc, setuploadArtc] = useState({
    title: "",
    thumbnail: "",
    description: "",
    category: "",
    readingTime: 0,
    mainContentTitle: "",
    mainPara: "",
    subTitle1: "",
    paragraph1: "",
    subTitle2: "",
    paragraph2: "",
  });

  const handleCatogorySet = (value: string) => {
    setuploadArtc((prev) => ({ ...prev, category: value }));
  };
  const handleReadingTimeSet = (value: string) => {
    setuploadArtc((prev) => ({ ...prev, readingTime: Number(value) }));
  };

  //value from first para component
  const handleParagrphData1 = (value: content) => {
    setuploadArtc((prev) => ({
      ...prev,
      mainContentTitle: value.title,
      mainPara: value.para,
    }));
  };

  //value from second para component
  const handleParagrphData2 = (value: content) => {
    setuploadArtc((prev) => ({
      ...prev,
      subTitle1: value.title,
      paragraph1: value.para,
    }));
  };

  //value from third para component
  const handleParagrphData3 = (value: content) => {
    setuploadArtc((prev) => ({
      ...prev,
      subTitle2: value.title,
      paragraph2: value.para,
    }));
  };

  const handleSubmitData = async () => {
    try {
      const response = await fetch(UPLOAD_ARTICLE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(uploadArtc),
      });
      const responseMsg = await response.json();
      if (responseMsg.success) {
        toast("Article uploaded successfully!", {
          icon: <RiCheckDoubleLine className="text-green-500" />,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-neutral-900 min-h-screen w-full mt-10 p-10 flex flex-col items-center max-xl:gap-4">
      {/* content info section*/}
      <section className="bg-black xl:w-[70%] p-3  xl:h-[20rem] max-xl:w-full flex  max-xl:flex-col">
        <section className="w-1/3 max-xl:w-full border border-neutral-700 h-full flex flex-col items-center max-xl:border-none">
          <div className="flex flex-col w-full xl:w-[70%] xl:mt-4 gap-2">
            <label className="text-md font-medium">Title *</label>
            <input
              type="text"
              value={uploadArtc.title}
              onChange={(e) =>
                setuploadArtc((prev) => ({ ...prev, title: e.target.value }))
              }
              className="rounded-sm h-10 bg-black border border-neutral-700 hover:outline-none px-2"
            />
          </div>
          <div className="flex flex-col w-full xl:w-[70%] xl:mt-4 gap-2">
            <label className="text-md font-medium">Thumbnail *</label>
            <div className="rounded-sm h-32 bg-black border border-neutral-700 flex justify-center items-center">
              <div className="flex flex-col items-center">
                {/* <RiFileUploadLine size={56} className="text-neutral-700" />
                <p className="text-neutral-700">Click here to upload</p> */}
                <input
                  type="text"
                  value={uploadArtc.thumbnail}
                  placeholder="Thumbnail image url"
                  onChange={(e) =>
                    setuploadArtc((prev) => ({
                      ...prev,
                      thumbnail: e.target.value,
                    }))
                  }
                  className="rounded-sm h-10 bg-black border border-neutral-700 hover:outline-none px-2"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-1/3 border max-xl:w-full border-neutral-700 border-x-0 h-full flex flex-col items-center max-xl:border-none">
          <div className="flex flex-col w-full xl:w-[70%] xl:mt-4 gap-2">
            <label className="text-md font-medium">
              Description *<span className="text-neutral-500">(~20 words)</span>
            </label>
            <textarea
              rows={4}
              value={uploadArtc.description}
              onChange={(e) =>
                setuploadArtc((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="rounded-sm xl:h-56 bg-black border border-neutral-700 hover:outline-none px-2 text-start"
            ></textarea>
          </div>
        </section>
        <section className="w-1/3 max-xl:w-full border border-neutral-700 h-full flex flex-col items-center gap-3">
          <div className="flex flex-col gap-2 xl:mt-4 xl:w-[70%]">
            <label className="text-md font-medium">Category *</label>
            <ComboboxDemo items={category} valueSetter={handleCatogorySet} />
          </div>

          <div className="flex flex-col gap-2 xl:mt-4 xl:w-[70%]">
            <label className="text-md font-medium">Avg reading time *</label>
            <ComboboxDemo items={times} valueSetter={handleReadingTimeSet} />
          </div>
        </section>
      </section>
      {/* content section*/}
      <section className=" xl:w-[70%] max-md:w-full p-3 xl:pb-10 flex-grow max-xl:w-full flex flex-col items-center border border-neutral-700  max-xl:flex-col">
        <ContentPara
          titleLabel="Main title *"
          paraLabel="Main paragraph *"
          handleParagrphData={handleParagrphData1}
        />
        <ContentPara
          titleLabel="Sub title"
          paraLabel="Second paragraph"
          handleParagrphData={handleParagrphData2}
        />
        <ContentPara
          titleLabel="Sub title"
          paraLabel="Third paragraph"
          handleParagrphData={handleParagrphData3}
        />
      </section>
      {/* bottom section*/}
      <section className="xl:h-[5rem] flex justify-start items-center">
        <button
          onClick={handleSubmitData}
          className="px-8 py-3 rounded-sm bg-neutral-700 hover:bg-green-500 font-medium"
        >
          Publish
        </button>
      </section>
      <ToastContainer />
    </div>
  );
};

export default NewContentUpload;
