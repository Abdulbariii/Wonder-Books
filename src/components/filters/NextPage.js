import React, { useState } from "react";
import useTheme from "../../hook/useTheme";

export default function NextPage() {
  const pages = [1, 2, 3, 4, "Next"];
  const { nextPageChange, color, text, mode, index } = useTheme();
  const [numPage, setNumPage] = useState(10);
  return (
    <div>
      <div className={`flex gap-0 ${color}   bg-opacity-30 rounded-md `}>
        {pages.map((indexBtn) => (
          <button
            key={indexBtn}
            className={`text-2xl hover:scale-110 transition-all ${
              indexBtn * 15 === index
                ? `${color}  scale-110 shadow-md`
                : index === 1 && indexBtn === 1
                ? `${color}  scale-110 shadow-md`
                : ""
            }  p-2 ${text} `}
            onClick={() => {
              nextPageChange(
                indexBtn === "Next"
                  ? index * 2
                  : indexBtn === 1
                  ? 1
                  : indexBtn * 15
              );
              setNumPage(numPage + 10);
            }}
          >
            {indexBtn}
          </button>
        ))}
      </div>
    </div>
  );
}
