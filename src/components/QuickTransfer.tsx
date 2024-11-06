import React, { useState } from "react";
import CardContainer from "./common/CardContainer";
import ceoImg from "../assets/ceo.png";
import director from "../assets/director.png";
import workman1 from "../assets/workman1.png";
import workman2 from "../assets/workman2.png";
import workman3 from "../assets/workman3.png";
import ProfileCard from "./common/ProfileCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaRegPaperPlane } from "react-icons/fa";

interface User {
  name: string;
  role: string;
  image: string;
}

const QuickTransfer: React.FC = () => {
  const users: User[] = [
    { name: "Livia Bator", role: "CEO", image: ceoImg },
    { name: "Randy Press", role: "Director", image: director },
    { name: "Workman", role: "Designer", image: workman1 },
    { name: "Alex Doe", role: "Manager", image: workman2 },
    { name: "Chris Evans", role: "Analyst", image: workman3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedUserName, setSelectedUserName] = useState<string | null>(null);

  const visibleUsers = users.slice(currentIndex, currentIndex + 3);

  // Handler for the "Next" button
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 3 < users.length) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  // Handler for the "Previous" button
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  return (
    <CardContainer title="Quick Transfer">
      <div className="bg-white py-10 px-6 h-72 rounded-2xl">
        <div className="relative flex items-center justify-center">
          {/* Conditionally render the "Previous" button */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white shadow-md hover:bg-primary"
            >
              <IoIosArrowBack className="text-textSecondary" />
            </button>
          )}

          {/* Display the visible user profiles */}
          <div className="flex items-center space-x-6">
            {visibleUsers.map((user) => (
              <ProfileCard
                key={user.name}
                {...user}
                isSelected={selectedUserName === user.name}
                onClick={() => setSelectedUserName(user.name)}
              />
            ))}
          </div>

          {/* Conditionally render the "Next" button */}
          {currentIndex + 3 < users.length && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white shadow-md hover:bg-primary"
            >
              <IoIosArrowForward className="text-textSecondary" />
            </button>
          )}
        </div>

        {/* Input and Send button */}
        <div className="flex items-center mt-10">
          <label className="text-textSecondary text-16 mr-4 font-inter">
            Write Amount
          </label>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="0.00"
              className="w-full px-4 py-3 pr-24 rounded-full bg-grey text-center"
              defaultValue="525.50"
            />
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-secondary text-white px-6 py-3 rounded-full flex items-center space-x-1 hover:text-primary hover:bg-black">
              <span>Send</span>
              <FaRegPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default QuickTransfer;
