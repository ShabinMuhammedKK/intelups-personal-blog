import { Link } from "react-router-dom";
import intelupsLogo from "/assets/intelups-logo.png";

const Header = () => {
  return (
    <div className="h-[6vh] w-full bg-white flex justify-start items-center border-b-2 max-md:h-[6vh] shadow-md shadow-neutral-200">
      <Link to="/">
        <div className="cursor-pointer w-fit p-3 h-fit md:ml-10 ml-4 flex justify-between items-center">
          <img
            className="w-16 h-16 max-md:w-12 max-md:h-12"
            src={intelupsLogo}
            alt="logo"
          />
          <h1 className="open-sans font-medium text-4xl max-md:text-3xl">
            Intelups
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Header;
