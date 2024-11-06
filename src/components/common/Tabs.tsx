interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const Tabs = ({ tabs, activeTab, onTabClick }: TabsProps) => {
  return (
    <div className="flex space-x-8 mb-6 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabClick(tab)}
          className={`px-2 pb-1 text-13 md:text-16 md:px-4  font-inter font-medium ${
            activeTab === tab
              ? "text-secondary border-b-2 border-secondary"
              : "text-textSecondary"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
