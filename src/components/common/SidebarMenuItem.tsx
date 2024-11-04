import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  name: string;
  icon: React.ReactNode;
  path: string;
}

const SidebarMenuItem = ({ name, icon, path }: SidebarItemProps) => {
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
    >
      <div className="mx-3 h-[25px] w-[25px]">{icon}</div>
      <span>{name}</span>
    </NavLink>
  );
};

export default SidebarMenuItem;
