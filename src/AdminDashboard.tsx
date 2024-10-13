import { useState } from "react";
import Header from "./components/components/Header";
import RecenltlyUploaded from "./components/components/RecenltlyUploaded";
import NewContentUpload from "./components/components/NewContentUpload";

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("recent");
  return (
    <div className="open-sans">
      <div>
        <Header />
        <section className=" text-white flex justify-center max-sm:px-5 items-center">
          <div className="xl:w-[40%] md:w-[40%] max-md:w-[80%] bg-black border font-medium text-sm max-sm:text-xs border-neutral-700 mt-2 py-1 gap-2 rounded-[6px] flex justify-around">
            <div
              onClick={() => setSelectedTab("recent")}
              className="cursor-pointer w-1/2 flex justify-center items-center ml-1 rounded-[4px] py-1"
              style={
                selectedTab === "new"
                  ? { backgroundColor: "#0a0a0a" }
                  : { backgroundColor: "#404040" }
              }
            >
              <h1>Recently Uploaded</h1>
            </div>
            <div
              onClick={() => setSelectedTab("new")}
              className="cursor-pointer w-1/2 flex justify-center items-center mr-1 rounded-[4px] py-1"
              style={
                selectedTab === "recent"
                  ? { backgroundColor: "#0a0a0a" }
                  : { backgroundColor: "#404040" }
              }
            >
              <h1>New Content</h1>
            </div>
          </div>
        </section>
        <section className="text-white">
          {selectedTab === "recent" ? (
            <RecenltlyUploaded />
          ) : (
            <NewContentUpload />
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
