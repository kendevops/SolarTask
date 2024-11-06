import React from "react";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const Tabs = ({ tabs, activeTab, onTabClick }: TabsProps) => {
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let newIndex = index;

    if (e.key === "ArrowRight") {
      newIndex = (index + 1) % tabs.length;
      e.preventDefault();
      onTabClick(tabs[newIndex]);
    } else if (e.key === "ArrowLeft") {
      newIndex = (index - 1 + tabs.length) % tabs.length;
      e.preventDefault();
      onTabClick(tabs[newIndex]);
    }
  };
  return (
    <div
      className="flex space-x-8 mb-6 border-b border-gray-200"
      role="tablist"
      aria-label="Settings Tabs"
    >
      {tabs.map((tab, index) => {
        const isSelected = activeTab === tab;

        return (
          <button
            key={tab}
            onClick={() => onTabClick(tab)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            role="tab"
            aria-selected={isSelected}
            aria-controls={`tabpanel-${tab}`}
            tabIndex={isSelected ? 0 : -1}
            className={`px-2 pb-1 text-13 md:text-16 md:px-4  font-inter font-medium ${
              activeTab === tab
                ? "text-secondary border-b-2 border-secondary"
                : "text-textSecondary"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
