import { Link } from "react-router-dom";
import intelupsLogo from "/assets/intelups-logo.png";
import intelupsTitle from "/assets/intelups-title.png";

const Header = () => {
  return (
    <div className="h-[6vh] w-full bg-white flex justify-start items-center border-b-2 max-md:h-[6vh] shadow-md shadow-neutral-200">
      <Link to="/">
        <div className="cursor-pointer w-fit p-3 h-fit md:ml-10 ml-4 max-sm:px-0 flex justify-between items-center">
          <img
            className="w-12 h-12 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10"
            src={intelupsLogo}
            alt="logo"
          />
          <img
            className="w-40 h-14 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10"
            src={intelupsTitle}
            alt="logo"
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
