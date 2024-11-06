import { UserInputContext } from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useContext } from "react";

const TopicDescription = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleInputChange = (fieldname, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldname]: value,
    }));
  };

  return (
    <div className="mx-20 lg:mx-44">
      {/* Input  Topic
       */}<br/>
      <div className="mt-5 text-center">
        <label>
          💡 Write a topic for which you want to generate a course (e.g., Python
          Course, Yoga, etc.)
        </label> 
        <Input
          className="h-14 text-xl text-center"
          placeholder={"Enter topic description"}
          defaultValue = {userCourseInput?.topic}
          onChange={(e) => handleInputChange("topic", e.target.value)}
        />
        <br/><br/>
      </div>
      {/* TextArea  */}
      <div className="mt-5 text-center">
        <label htmlFor="">
          {" "}
          🔥Tell us more About Your course , What you want to include in the
          course(Optional)
        </label>
        <Textarea
          placeholder="About your Course"
          className="text-center h-24 text-xl"
          defaultValue = {userCourseInput?.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </div>
    </div>
  );
};

export default TopicDescription;
