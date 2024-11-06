import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Layout from "./components/Layout";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Settings = React.lazy(() => import("./components/Settings"));
const CreditCards = React.lazy(() => import("./components/CreditCards"));

import "./App.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/credit-cards" element={<CreditCards />} />
              <Route path="/setting" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
