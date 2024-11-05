import { useApp } from "../context/AppContext";

const RecentTransactions = () => {
  const { transactions } = useApp();

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">Recent Transactions</h2>
      <ul className="space-y-2">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between items-center"
          >
            <span className="flex items-center">
              {transaction.icon} {transaction.description}
            </span>
            <span
              className={`${
                transaction.amount < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              ${transaction.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
