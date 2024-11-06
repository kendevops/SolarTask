import React, { createContext, useContext, useState, useEffect } from "react";
import { BsWindowStack } from "react-icons/bs";
import { PiPaypalLogoBold } from "react-icons/pi";
import { RiExchangeDollarLine } from "react-icons/ri";

interface Card {
  id: number;
  balance: number;
  cardHolder: string;
  cardNumber: string;
  expiry: string;
  plain: boolean;
}

interface Transaction {
  id: number;
  description: string;
  date: string;
  amount: number;
  icon: JSX.Element;
  className: string;
}

interface DashboardContextProps {
  cards: Card[];
  transactions: Transaction[];
  pageTitle: string;
  setPageTitle: (title: string) => void;
  toggleSidebar: boolean;
  setToggleSidebar: (toggle: boolean) => void;
}

const AppContext = createContext<DashboardContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [pageTitle, setPageTitle] = useState("Overview");
  const [toggleSidebar, setToggleSidebar] = useState(false);

  useEffect(() => {
    // Mock fetching data
    setCards([
      {
        id: 1,
        balance: 5756,
        cardHolder: "Eddy Cusuma",
        cardNumber: "3778 **** **** 1234",
        expiry: "12/22",
        plain: false,
      },
      {
        id: 2,
        balance: 5756,
        cardHolder: "Eddy Cusuma",
        cardNumber: "3778 **** **** 1234",
        expiry: "12/22",
        plain: true,
      },
    ]);
    setTransactions([
      {
        icon: <BsWindowStack className="w-7 h-7" />,
        description: "Deposit from my Card",
        date: "28 January 2021",
        amount: -850,
        className: "bg-[#FFF5D9] text-[#FFBB38]",
        id: 1,
      },
      {
        icon: <PiPaypalLogoBold className="w-7 h-7" />,
        description: "Deposit Paypal",
        date: "25 January 2021",
        amount: 2500,
        className: "bg-[#E7EDFF] text-[#396AFF]",
        id: 2,
      },
      {
        icon: <RiExchangeDollarLine className="w-7 h-7" />,
        description: "Jemi Wilson",
        date: "21 January 2021",
        amount: 5400,
        className: "bg-[#DCFAF8] text-[#16DBCC]",
        id: 3,
      },
    ]);
  }, []);

  return (
    <AppContext.Provider
      value={{
        cards,
        transactions,
        pageTitle,
        setPageTitle,
        toggleSidebar,
        setToggleSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within an AppProvider");
  return context;
};
