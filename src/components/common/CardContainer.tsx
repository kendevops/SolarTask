import React from "react";
import { NavLink } from "react-router-dom";

interface CardContainerProps {
  title: string;
  className?: string;
  link?: string;
  children: React.ReactNode;
}

const CardContainer = ({
  title,
  className,
  link,
  children,
}: CardContainerProps) => {
  return (
    <section className={`${className}`}>
      <div className="flex justify-between items-center mb-4 font-inter font-semibold textPrimary">
        <h2 className="text-xl">{title}</h2>
        {link && (
          <NavLink to={link} className="text-17 hover:underline cursor-pointer">
            See All
          </NavLink>
        )}
      </div>
      <>{children}</>
    </section>
  );
};

export default CardContainer;
