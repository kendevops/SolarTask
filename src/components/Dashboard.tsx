import MyCards from "./MyCards";
import RecentTransactions from "./RecentTransactions";

const Dashboard = () => {
  return (
    <div className="px-10 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MyCards />
          <RecentTransactions />
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <WeeklyActivityChart />
        <ExpenseStatistics />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <QuickTransfer />
        <BalanceHistoryChart />
      </div> */}
    </div>
  );
};

export default Dashboard;
