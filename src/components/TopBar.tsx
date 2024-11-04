import { useApp } from "../context/AppContext";
import { IoSearch } from "react-icons/io5";
import { IoIosSettings, IoMdNotificationsOutline } from "react-icons/io";
import profile from "../assets/profile.png";

const TopBar = () => {
  const { pageTitle } = useApp();

  return (
    <div className="w-full h-[101px] border-b border-b-light bg-white px-10 py-7">
      <div className="flex justify-between items-center">
        <h1 className="text-textPrimary text-2xl font-semibold">{pageTitle}</h1>
        <div className="flex items-center space-x-4 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for something"
              className="px-10 py-3 rounded-full bg-primary border border-transparent focus:border-secondary focus:outline-none"
            />
            <IoSearch className="absolute left-3 top-4 text-[#718EBF]" />
          </div>
          <button className="flex justify-center items-center rounded-full bg-primary w-[50px] h-[50px]">
            <IoIosSettings className="text-[#718EBF] w-[25px] h-[25px]" />
          </button>
          <button className="flex justify-center items-center rounded-full bg-primary w-[50px] h-[50px]">
            <IoMdNotificationsOutline className="text-[#396AFF] w-[25px] h-[25px]" />
          </button>
          <img
            src={profile}
            alt="User Avatar"
            className="w-[60px] h-[60px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
