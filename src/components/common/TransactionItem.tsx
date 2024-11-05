import React from "react";

interface TransactionItemProps {
  icon: React.ReactNode;
  description: string;
  date: string;
  amount: number;
  className: string;
}

const TransactionItem = ({
  icon,
  description,
  date,
  amount,
  className,
}: TransactionItemProps) => {
  const amountColor = amount < 0 ? "text-[#FF4B4A]" : "text-[#41D4A8]";

  return (
    <div className="flex items-center space-x-4 p-2">
      <div
        className={`flex-shrink-0 w-[55px] h-[55px] rounded-full flex items-center justify-center ${className}`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-secondary text-16 font-inter font-medium">
          {description}
        </p>
        <p className="text-textSecondary text-15 font-inter">{date}</p>
      </div>
      <div className={`${amountColor} text-16 font-inter font-medium`}>
        {amount < 0 ? `-$${Math.abs(amount)}` : `+$${amount.toLocaleString()}`}
      </div>
    </div>
  );
};

export default TransactionItem;
