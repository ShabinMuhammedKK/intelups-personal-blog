import { RiArrowDropDownLine } from "@remixicon/react";

const topicNavs = ["HTML", "CSS", "Js", "React.js", "Node.js", "SQL", "NoSQL"];

const FeedsNav = () => {
  return (
    <div className=" w-full bg-black border-b border-neutral-700 text-white open-sans flex gap-1 justify-center">
      {topicNavs.map((items, i) => (
        <ul
          key={i}
          className="flex min-w-24 px-1 py-1 my-2 rounded-sm bg-neutral-900"
        >
          <p className="flex-1 text-center">{items}</p>
          <RiArrowDropDownLine className="text-neutral-400"/>
        </ul>
      ))}
    </div>
  );
};

export default FeedsNav;
