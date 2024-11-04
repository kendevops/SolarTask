import React, { createContext, useContext, useState, useEffect } from "react";

interface Card {
  balance: number;
  cardHolder: string;
  cardNumber: string;
  expiry: string;
}

interface Transaction {
  id: number;
  description: string;
  date: string;
  amount: number;
  icon: JSX.Element;
}

interface DashboardContextProps {
  cards: Card[];
  transactions: Transaction[];
  pageTitle: string;
  setPageTitle: (title: string) => void;
}

const AppContext = createContext<DashboardContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState<Card[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
      const [pageTitle, setPageTitle] = useState("Overview");


  useEffect(() => {
    // Mock fetching data
    setCards([
      {
        balance: 5756,
        cardHolder: "Eddy Cusuma",
        cardNumber: "3778 **** **** 1234",
        expiry: "12/22",
      },
    ]);
    setTransactions([
      {
        id: 1,
        description: "Deposit from Card",
        date: "28 January 2021",
        amount: -850,
        icon: <span>💳</span>,
      },
      {
        id: 2,
        description: "Deposit Paypal",
        date: "25 January 2021",
        amount: 2500,
        icon: <span>💸</span>,
      },
    ]);
  }, []);

  return (
    <AppContext.Provider
      value={{ cards, transactions, pageTitle, setPageTitle }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useDashboard must be used within a DashboardProvider");
  return context;
};
