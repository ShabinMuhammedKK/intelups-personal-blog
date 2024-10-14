import { RiArrowDropDownLine,RiMenu3Line } from "@remixicon/react";

const topicNavs = ["HTML", "CSS", "Js", "React.js", "Node.js", "SQL", "NoSQL","More"];

const FeedsNav = () => {
  return (
    <div className="bg-black open-sans max-md:flex max-md:justify-end px-2 py-1">
    <div className=" w-full max-md:hidden bg-black text-white open-sans flex gap-1 justify-center">
      {topicNavs.map((items, i) => (
        <ul
          key={i}
          className="flex min-w-20 px-1 py-1 my-2 rounded-[2px] bg-neutral-900"
        >
          <p className="flex-1 text-center">{items}</p>
          <RiArrowDropDownLine className="text-neutral-400"/>
        </ul>
      ))}
      
    </div>
    <button className="md:hidden bg text-white"><RiMenu3Line/></button>
    </div>
  );
};

export default FeedsNav;
