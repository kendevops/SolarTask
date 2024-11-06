import { useApp } from "../context/AppContext";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoIosSettings, IoMdNotificationsOutline } from "react-icons/io";
import { FaBars } from "react-icons/fa";

import profile from "../assets/profile.png";

const TopBar = () => {
  const { pageTitle, setToggleSidebar } = useApp();

  return (
    <div className="w-full md:border-b md:border-b-light bg-white p-5 md:px-10 md:py-7">
      <div className="flex justify-between items-center">
        <div className="flex lg:hidden" onClick={() => setToggleSidebar(true)}>
          <FaBars className="w-5 h-5 md:w-8 md:h-8 text-textPrimary" />
        </div>
        <h1 className="text-textPrimary text-2xl font-semibold">{pageTitle}</h1>
        <div className="flex items-center space-x-4 gap-4">
          <div className="relative hidden md:flex">
            <input
              type="text"
              placeholder="Search for something"
              className="px-10 py-3 rounded-full bg-primary border border-transparent focus:border-secondary focus:outline-none"
            />
            <IoSearch className="absolute left-3 top-4 text-[#718EBF]" />
          </div>
          <NavLink
            to={"/setting"}
            className="hidden justify-center items-center rounded-full bg-primary w-13 h-13 hover:bg-light lg:flex"
          >
            <IoIosSettings className="text-[#718EBF] w-6.5 h-6.5" />
          </NavLink>
          <button className="hidden justify-center items-center rounded-full bg-primary w-13 h-13 hover:bg-light lg:flex">
            <IoMdNotificationsOutline className="text-[#396AFF] w-6.5 h-6.5" />
          </button>
          <img
            src={profile}
            alt="User Avatar"
            className="w-[60px] h-[60px] rounded-full"
          />
        </div>
      </div>
      <div className="relative flex mt-4 w-full md:hidden">
        <input
          type="text"
          placeholder="Search for something"
          className="w-full px-10 py-3 rounded-full bg-primary border border-transparent focus:border-secondary focus:outline-none"
        />
        <IoSearch className="absolute left-3 top-4 text-[#718EBF]" />
      </div>
    </div>
  );
};

export default TopBar;
