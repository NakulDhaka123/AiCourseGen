import { UserInputContext } from "@/app/_context/UserInputContext";
import CategoryList from "@/app/_shared/CategoryList";
import Image from "next/image";
import React, { useContext } from "react";

const SelectCategory = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleCategoryChange = (category) => {
    setUserCourseInput((prev) => ({
      ...prev,
      category: category,
    }));
  };

  return (
    <div className="px-10 md:px-20">
      <h2 className="my-5 text-center">Select the course category</h2>
      <div className="grid grid-cols-3 gap-10">
        {CategoryList.map((item) => (
          <div
            key={item.id} // Added key for better performance
            className={`flex flex-col p-5 border items-center rounded-xl hover:border-primary hover:bg-red-400 cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out ${
              userCourseInput?.category === item.name && "border-primary bg-red-400"
            }`}
            onClick={() => handleCategoryChange(item.name)}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={50}
              height={50}
              className="rounded-full" // Make the image rounded
            />
            <h2 className="text-center mt-2">{item.name}</h2> {/* Add margin-top for gap */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
