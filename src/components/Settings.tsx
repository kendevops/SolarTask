import { useState } from "react";
import ProfileForm from "../components/ProfileForm";
import Tabs from "./common/Tabs";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");
  const tabs = ["Edit Profile", "Preferences", "Security"];

  return (
    <div className="bg-white p-2 md:p-8 rounded-2xl">
      <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
      {activeTab === "Edit Profile" && <ProfileForm />}
      {activeTab === "Preferences" && <div>Preferences content here</div>}
      {activeTab === "Security" && <div>Security content here</div>}
    </div>
  );
};

export default Settings;
