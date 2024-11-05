import BalanceHistoryChart from "./BalanceHistoryChart";
import ExpenseStatistics from "./ExpenseStatistics";
import MyCards from "./MyCards";
import QuickTransfer from "./QuickTransfer";
import RecentTransactions from "./RecentTransactions";
import WeeklyActivityChart from "./WeeklyActivityChart";

const Dashboard = () => {
  return (
    <div className="px-10 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <MyCards />
        <RecentTransactions />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <WeeklyActivityChart />
        <ExpenseStatistics />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <QuickTransfer />
        <BalanceHistoryChart />
      </div>
    </div>
  );
};

export default Dashboard;
