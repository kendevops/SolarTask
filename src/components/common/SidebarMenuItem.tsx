import { NavLink } from "react-router-dom";
import { useApp } from "../../context/AppContext";

interface SidebarItemProps {
  name: string;
  title: string;
  icon: React.ReactNode;
  path: string;
  onClick?: () => void;
}

const SidebarMenuItem = ({
  name,
  title,
  icon,
  path,
  onClick,
}: SidebarItemProps) => {
  const { setPageTitle } = useApp();

  const handleClick = () => {
    setPageTitle(title);
    if (onClick) {
      onClick();
    }
  };
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center p-4 rounded-sm hover:bg-gray-100 ${
          isActive
            ? "border-l-[6px] border-secondary text-secondary font-semibold"
            : "text-accent"
        }`
      }
      onClick={handleClick}
    >
      <div className="mx-4">{icon}</div>
      <span className="font-inter font-medium text-18">{name}</span>
    </NavLink>
  );
};

export default SidebarMenuItem;
