import { Link, useNavigate } from "react-router-dom";
import intelupsLogo from "/assets/intelups-logo.png";
import { RiLogoutBoxRLine } from "@remixicon/react";

interface HeaderIF {
  isAdmin: boolean;
}

const Header: React.FC<HeaderIF> = ({ isAdmin }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = "session_token=; Max-Age=0; path=/;";
    navigate("/admin");
  };
  return (
    <div className="h-[5vh] w-full bg-white flex justify-between items-center border-b-2">
      <Link to="/">
        <div className="cursor-pointer w-fit p-3 h-fit md:ml-10 ml-4 max-sm:px-0 flex justify-between items-center">
          <img
            className="w-10 h-10 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10"
            src={intelupsLogo}
            alt="logo"
          />
          <h1 className="xl:text-3xl lg:text-2xl max-sm:hidden sm:text-2xl open-sans font-semibold">
            Intelups
          </h1>
        </div>
      </Link>
      {isAdmin && (
        <div className="xl:mr-10 lg:mr-6 md:mr-4 max-md:mr-2 h-full flex items-center">
          <button
            className="w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white h-[80%] px-4 max-md:px-2 rounded-sm flex items-center open-sans font-medium"
            onClick={handleLogout}
          >
            Logout <RiLogoutBoxRLine />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
