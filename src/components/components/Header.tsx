import { Link } from "react-router-dom";
import intelupsLogo from "/assets/intelups-logo.png";

const Header = () => {
  return (
    <div className="h-[4.5vh] w-full bg-white flex justify-start items-center border-b-2 shadow-md shadow-neutral-200">
      <Link to="/">
        <div className="cursor-pointer w-fit p-3 h-fit md:ml-10 ml-4 max-sm:px-0 flex justify-between items-center">
          <img
            className="w-10 h-10 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10"
            src={intelupsLogo}
            alt="logo"
          />
          <h1 className="xl:text-3xl lg:text-2xl max-sm:hidden sm:text-2xl open-sans font-semibold">Intelups</h1>
        </div>
      </Link>
    </div>
  );
};

export default Header;
