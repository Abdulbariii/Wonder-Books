import React, { useState } from "react";
import useTheme from "../../hook/useTheme";
export default function CategoryOptions() {
  const { searchChange, mode, color, text, nextPageChange } = useTheme();
  const options = [
    { option: "subject:All" },
    { option: "subject:General" },
    { option: "subject:Crime" },
    { option: "subject:Education" },
    { option: "subject:Sports" },
    { option: "subject:Science" },
    { option: "subject:History" },
    { option: "subject:Manga" },
    { option: "subject:Superheros" },
    { option: "subject:Literary" },
    { option: "subject:Fantasy" },
    { option: "subject:Romance" },
  ];

  const [gener, setGener] = useState("All");

  console.log(gener);
  return (
    <div className="lg:text-2xl md:text-xl text-xl">
      <select
        className={`${color} ${text} bg-opacity-30 text-center  lg:w-40 md:w-40 w-24 leading-6 lg:h-10 md:h-10 h-8 rounded-2xl`}
        value={gener}
        onChange={(event) => {
          setGener(event.target.value);
          searchChange(
            `subject:${
              event.target.value === "All" ? "Novel" : event.target.value
            }`
          );
        }}
      >
        {options.map((option) => (
          <option key={option.option} className={` `}>
            {option.option.replace("subject:", "")}
          </option>
        ))}
      </select>
    </div>
  );
}
