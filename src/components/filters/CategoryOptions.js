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
    <div className="text-2xl">
      <select
        className={`${color} ${text} bg-opacity-30 text-center  w-40 leading-6 h-10 rounded-2xl`}
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
