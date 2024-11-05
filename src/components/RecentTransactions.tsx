import React from "react";
import CardContainer from "./common/CardContainer";
import TransactionItem from "./common/TransactionItem";
import { BsWindowStack } from "react-icons/bs";
import { PiPaypalLogoBold } from "react-icons/pi";
import { RiExchangeDollarLine } from "react-icons/ri";


const RecentTransactions: React.FC = () => {
  const transactions = [
    {
      icon: <BsWindowStack className="w-7 h-7" />,
      description: "Deposit from my Card",
      date: "28 January 2021",
      amount: -850,
      className: "bg-[#FFF5D9] text-[#FFBB38]",
    },
    {
      icon: <PiPaypalLogoBold className="w-7 h-7" />,
      description: "Deposit Paypal",
      date: "25 January 2021",
      amount: 2500,
      className: "bg-[#E7EDFF] text-[#396AFF]",
    },
    {
      icon: <RiExchangeDollarLine className="w-7 h-7" />,
      description: "Jemi Wilson",
      date: "21 January 2021",
      amount: 5400,
      className: "bg-[#DCFAF8] text-[#16DBCC]",
    },
  ];

  return (
    <CardContainer title="Recent Transactions">
      <div className="bg-white rounded-3xl p-4">
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={index}
            icon={transaction.icon}
            className={transaction.className}
            description={transaction.description}
            date={transaction.date}
            amount={transaction.amount}
          />
        ))}
      </div>
    </CardContainer>
  );
};

export default RecentTransactions;
