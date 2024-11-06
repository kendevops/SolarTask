import { useState } from "react";
import ProfileForm from "../components/ProfileForm";
import Tabs from "./common/Tabs";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");
  const tabs = ["Edit Profile", "Preferences", "Security"];

  return (
    <div className="bg-white p-2 md:p-8 rounded-2xl">
      <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
      {tabs.map((tab) =>
        activeTab === tab ? (
          <div
            key={tab}
            role="tabpanel"
            id={`tabpanel-${tab}`}
            aria-labelledby={`tab-${tab}`}
            tabIndex={0}
          >
            {tab === "Edit Profile" && <ProfileForm />}
            {tab === "Preferences" && <div>Preferences content here</div>}
            {tab === "Security" && <div>Security content here</div>}
          </div>
        ) : null
      )}
    </div>
  );
};

export default Settings;
