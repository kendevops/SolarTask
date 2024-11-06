import SidebarMenuItem from "./common/SidebarMenuItem";
import logo from "../assets/logo.svg";
import { IoIosSettings } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaHandHoldingUsd, FaFunnelDollar } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import {
  FaCreditCard,
  FaMoneyBillTransfer,
  FaUserLarge,
  FaFileInvoiceDollar,
} from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className="hidden lg:block w-64 bg-white h-screen shadow-lg border-r border-r-light">
      <div className="flex items-center justify-center py-10 md:w-64 lg:w-full">
        <img src={logo} alt="logo" />
      </div>
      <div className="">
        <SidebarMenuItem
          name="Dashboard"
          title="Overview"
          icon={<AiFillHome className="w-6 h-6" />}
          path="/"
        />
        <SidebarMenuItem
          name="Transactions"
          title="Transactions"
          icon={<FaMoneyBillTransfer className="w-6 h-6" />}
          path="/transactions"
        />
        <SidebarMenuItem
          name="Accounts"
          title="Accounts"
          icon={<FaUserLarge className="w-6 h-6" />}
          path="/accounts"
        />
        <SidebarMenuItem
          name="Investments"
          title="Investments"
          icon={<FaFileInvoiceDollar className="w-6 h-6" />}
          path="/investments"
        />
        <SidebarMenuItem
          name="Credit Cards"
          title="Credit Cards"
          icon={<FaCreditCard className="w-6 h-6" />}
          path="/credit-cards"
        />
        <SidebarMenuItem
          name="Loans"
          title="Loan"
          icon={<FaHandHoldingUsd className="w-6 h-6" />}
          path="/loans"
        />
        <SidebarMenuItem
          name="Services"
          title="Services"
          icon={<BsTools className="w-6 h-6" />}
          path="/services"
        />
        <SidebarMenuItem
          name="My Privileges"
          title="Privileges"
          icon={<FaFunnelDollar className="w-6 h-6" />}
          path="/privileges"
        />
        <SidebarMenuItem
          name="Setting"
          title="Setting"
          icon={<IoIosSettings className="w-6 h-6" />}
          path="/setting"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
