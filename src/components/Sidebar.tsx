import SidebarMenuItem from "./common/SidebarMenuItem";
import logo from "../assets/logo.svg";
// import home from "../assets/sidebarIcons/home.svg";
// import transaction from "../assets/sidebarIcons/transaction.svg";
// import account from "../assets/sidebarIcons/account.svg";
// import investment from "../assets/sidebarIcons/account.svg";
// import creditCard from "../assets/sidebarIcons/account.svg";
// import loan from "../assets/sidebarIcons/account.svg";
// import service from "../assets/sidebarIcons/account.svg";
// import privilege from "../assets/sidebarIcons/account.svg";
// import setting from "../assets/sidebarIcons/account.svg";
import { IoIosSettings } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaUserLarge } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";




const Sidebar = () => {
  return (
    <aside className="hidden lg:block w-64 bg-white h-screen shadow-lg border-r border-r-light">
      <div className="flex items-center justify-center py-10">
        <img src={logo} />
      </div>
      <div className="">
        <SidebarMenuItem
          name="Dashboard"
          icon={<AiFillHome className="w-5 h-5" />}
          path="/"
        />
        <SidebarMenuItem
          name="Transactions"
          icon={<FaCreditCard className="w-5 h-5" />}
          path="/transactions"
        />
        <SidebarMenuItem
          name="Accounts"
          icon={<FaUserLarge className="w-5 h-5" />}
          path="/accounts"
        />
        <SidebarMenuItem
          name="Investments"
          icon={<FaCreditCard className="w-5 h-5" />}
          path="/investments"
        />
        <SidebarMenuItem
          name="Credit Cards"
          icon={<FaCreditCard className="w-5 h-5" />}
          path="/credit-cards"
        />
        <SidebarMenuItem
          name="Loans"
          icon={<FaCreditCard className="w-5 h-5" />}
          path="/loans"
        />
        <SidebarMenuItem
          name="Services"
          icon={<FaCreditCard className="w-5 h-5" />}
          path="/services"
        />
        <SidebarMenuItem
          name="My Privileges"
          icon={<FaCreditCard className="w-5 h-5" />}
          path="/privileges"
        />
        <SidebarMenuItem
          name="Setting"
          icon={<IoIosSettings className="w-5 h-5" />}
          path="/setting"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
