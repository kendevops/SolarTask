import React from "react";

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  isSelected: boolean;
  onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  image,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col gap-1 items-center cursor-pointer`}
    >
      <div className="w-[70px] h-[70px] rounded-full overflow-hidden mb-2">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <p
        className={`${
          isSelected ? "font-bold" : "font-normal"
        } text-secondary font-inter text-12 md:text-16`}
      >
        {name}
      </p>
      <p
        className={`${
          isSelected ? "font-bold" : "font-normal"
        } text-textSecondary font-inter text-12 md:text-15`}
      >
        {role}
      </p>
    </div>
  );
};

export default ProfileCard;
