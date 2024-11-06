import React, { Suspense } from "react";
import MyCards from "./MyCards";
import QuickTransfer from "./QuickTransfer";
import RecentTransactions from "./RecentTransactions";

const WeeklyActivityChart = React.lazy(() => import("./WeeklyActivityChart"));
const ExpenseStatistics = React.lazy(() => import("./ExpenseStatistics"));
const BalanceHistoryChart = React.lazy(() => import("./BalanceHistoryChart"));
const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <MyCards />
        <RecentTransactions />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <Suspense fallback={<div>Loading Weekly Activity...</div>}>
          <WeeklyActivityChart />
        </Suspense>
        <Suspense fallback={<div>Loading Expense Statistics...</div>}>
          <ExpenseStatistics />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <QuickTransfer />
        <Suspense fallback={<div>Loading Balance History...</div>}>
          <BalanceHistoryChart />
        </Suspense>
      </div>
    </>
  );
};

export default Dashboard;
