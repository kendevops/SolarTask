import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import {
  getCards,
  getTransactions,
  Card,
  Transaction as ApiTransaction,
} from "../api";
import { BsWindowStack } from "react-icons/bs";
import { PiPaypalLogoBold } from "react-icons/pi";
import { RiExchangeDollarLine } from "react-icons/ri";

interface Transaction extends Omit<ApiTransaction, "iconName" | "classType"> {
  icon: JSX.Element;
  className: string;
}

interface AppContextProps {
  cards: Card[];
  transactions: Transaction[];
  pageTitle: string;
  setPageTitle: (title: string) => void;
  toggleSidebar: boolean;
  setToggleSidebar: (toggle: boolean) => void;
  loadingCards: boolean;
  loadingTransactions: boolean;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [pageTitle, setPageTitle] = useState("Overview");
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [loadingCards, setLoadingCards] = useState(true);
  const [loadingTransactions, setLoadingTransactions] = useState(true);

  const contextValue = useMemo(
    () => ({
      cards,
      transactions,
      pageTitle,
      setPageTitle,
      toggleSidebar,
      setToggleSidebar,
      loadingCards,
      loadingTransactions,
    }),
    [
      cards,
      transactions,
      pageTitle,
      setPageTitle,
      toggleSidebar,
      setToggleSidebar,
      loadingCards,
      loadingTransactions,
    ]
  );

  useEffect(() => {
    const fetchCards = async () => {
      setLoadingCards(true);
      const cardsData = await getCards();
      setCards(cardsData);
      setLoadingCards(false);
    };

    const fetchTransactions = async () => {
      setLoadingTransactions(true);
      const transactionsData = await getTransactions();
      
        // I am Mapping iconName and classType to actual icon components
      const iconMap: { [key: string]: JSX.Element } = {
        BsWindowStack: <BsWindowStack className="w-7 h-7" />,
        PiPaypalLogoBold: <PiPaypalLogoBold className="w-7 h-7" />,
        RiExchangeDollarLine: <RiExchangeDollarLine className="w-7 h-7" />,
      };

      const classMap: { [key: string]: string } = {
        "card-deposit": "bg-[#E7EDFF] text-[#396AFF]",
        "paypal-deposit": "bg-[#FFF5D9] text-[#FFBB38]",
        withdrawal: "bg-[#DCFAF8] text-[#16DBCC]",
      };

      const transactionsWithIconsAndClasses: Transaction[] =
        transactionsData.map((transaction) => ({
          ...transaction,
          icon: iconMap[transaction.iconName] || (
            <BsWindowStack className="w-7 h-7" />
          ),
          className: classMap[transaction.classType] || "default-class",
        }));

      setTransactions(transactionsWithIconsAndClasses);
      setLoadingTransactions(false);
    };

    fetchCards();
    fetchTransactions();
  }, []);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within an AppProvider");
  return context;
};
