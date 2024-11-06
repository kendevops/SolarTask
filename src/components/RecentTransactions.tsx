import CardContainer from "./common/CardContainer";
import TransactionItem from "./common/TransactionItem";
import { useApp } from "../context/AppContext";

const RecentTransactions = () => {
  const { transactions } = useApp();

  return (
    <CardContainer title="Recent Transactions">
      <div className="bg-white rounded-3xl p-4 max-h-60 overflow-y-auto hide-scrollbar">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
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
