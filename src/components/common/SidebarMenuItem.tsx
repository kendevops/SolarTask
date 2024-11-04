import { NavLink } from "react-router-dom";
import { useApp } from "../../context/AppContext";

interface SidebarItemProps {
  name: string;
  title: string;
  icon: React.ReactNode;
  path: string;
}

const SidebarMenuItem = ({ name, title, icon, path }: SidebarItemProps) => {
  const { setPageTitle } = useApp();
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center p-4 rounded-md hover:bg-gray-100 ${
          isActive
            ? "border-l-[6px] border-secondary text-secondary font-semibold"
            : "text-accent"
        }`
      }
      onClick={() => setPageTitle(title)}
    >
      <div className="mx-3 h-[25px] w-[25px]">{icon}</div>
      <span>{name}</span>
    </NavLink>
  );
};

export default SidebarMenuItem;
