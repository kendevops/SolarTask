import SidebarMenuItem from "./common/SidebarMenuItem";
import logo from "../assets/logo.svg";
import { IoIosSettings, IoMdClose } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaHandHoldingUsd, FaFunnelDollar } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import {
  FaCreditCard,
  FaMoneyBillTransfer,
  FaUserLarge,
  FaFileInvoiceDollar,
} from "react-icons/fa6";
import { useApp } from "../context/AppContext";

const Sidebar = () => {
  const { toggleSidebar, setToggleSidebar } = useApp();
  return (
    <aside
      className={`fixed top-0 left-0 w-64 bg-white h-screen shadow-lg border-r border-r-light z-50 transform ${
        toggleSidebar ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 lg:translate-x-0 lg:block lg:relative`}
    >
      {toggleSidebar && (
        <div
          className="fixed top-3 right-2 z-40 cursor-pointer lg:hidden"
          onClick={() => setToggleSidebar(false)}
        >
          <IoMdClose className="w-6 h-6 text-textPrimary" />
        </div>
      )}
      <div className="flex items-center justify-center py-10 md:w-64 lg:w-full">
        <img src={logo} alt="logo" />
      </div>
      <div className="">
        <SidebarMenuItem
          name="Dashboard"
          title="Overview"
          icon={<AiFillHome className="w-6.5 h-6.5" />}
          path="/"
          onClick={() => setToggleSidebar(false)}
        />
        <SidebarMenuItem
          name="Transactions"
          title="Transactions"
          icon={<FaMoneyBillTransfer className="w-6.5 h-6.5" />}
          path="/transactions"
        />
        <SidebarMenuItem
          name="Accounts"
          title="Accounts"
          icon={<FaUserLarge className="w-6.5 h-6.5" />}
          path="/accounts"
        />
        <SidebarMenuItem
          name="Investments"
          title="Investments"
          icon={<FaFileInvoiceDollar className="w-6.5 h-6.5" />}
          path="/investments"
        />
        <SidebarMenuItem
          name="Credit Cards"
          title="Credit Cards"
          icon={<FaCreditCard className="w-6.5 h-6.5" />}
          path="/credit-cards"
          onClick={() => setToggleSidebar(false)}
        />
        <SidebarMenuItem
          name="Loans"
          title="Loan"
          icon={<FaHandHoldingUsd className="w-6.5 h-6.5" />}
          path="/loans"
        />
        <SidebarMenuItem
          name="Services"
          title="Services"
          icon={<BsTools className="w-6.5 h-6.5" />}
          path="/services"
        />
        <SidebarMenuItem
          name="My Privileges"
          title="Privileges"
          icon={<FaFunnelDollar className="w-6.5 h-6.5" />}
          path="/privileges"
        />
        <SidebarMenuItem
          name="Setting"
          title="Setting"
          icon={<IoIosSettings className="w-6.5 h-6.5" />}
          path="/setting"
          onClick={() => setToggleSidebar(false)}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
