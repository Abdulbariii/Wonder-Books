import React, { useState } from "react";
import useTheme from "../../hook/useTheme";

export default function NextPage() {
  const pages = [1, 2, 3, 4, "Next"];
  const { nextPageChange, color, text, mode, index } = useTheme();
  const [numPage, setNumPage] = useState(10);
  return (
    <div>
      <div className={`flex gap-0 ${color}  bg-opacity-30 rounded-md `}>
        {pages.map((indexBtn) => (
          <button
            className={`text-2xl transition-all ${
              indexBtn * 15 === index ? `${color}  scale-110 shadow-md` : ""
            }  p-2 ${text} `}
            onClick={() => {
              nextPageChange(
                indexBtn === "Next"
                  ? numPage * 5
                  : indexBtn === 1
                  ? 2
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
