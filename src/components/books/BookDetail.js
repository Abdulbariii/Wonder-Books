import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import useAuth from "../../hook/useAuth";
import { useFirestore } from "../../hook/useFirestore";
import useTheme from "../../hook/useTheme";
import ModalWarning from "../modalWarning/ModalWarning";
import BookshelfOption from "./BookshelfOption";
import useCollection from "../../hook/useCollection";
import { subText } from "../../utils/subText";
export default function BookDetail(props) {
  const { color, text, mode, openModal } = useTheme();
  const [fav, setFav] = useState("bookmark-outline");
  const [cartAdded, setCartAdded] = useState(false);
  const { addDocument, deleteDocument } = useFirestore("Carts");
  const { user } = useAuth();

  const { documents, error } = useCollection(
    "Carts",
    ["uid", "==", user ? user.uid : null],
    ["createdAt", "desc"]
  );
  return (
    <div
      className={`flex flex-col items-start  justify-evenly md:pt-20 gap-24  `}
    >
      <div
        className={`flex justify-around items-start gap-20 flex-wrap lg:flex-nowrap `}
      >
        <img
          className={`object-cover w-80 h-[450px]  rounded-2xl   `}
          src={
            props.data.volumeInfo.imageLinks &&
            props.data.volumeInfo.imageLinks.thumbnail.concat(
              "&fife=w700-h1000"
            )
          }
        />

        <div className="flex flex-col gap-10 md:gap-28 justify-between items-start">
          <div className="flex justify-around flex-col gap-5">
            <div className="flex justify-between  items-center md:gap-40">
              <h1 className={`text-5xl  ${text}`}>
                {props.data.volumeInfo.title}
              </h1>
            </div>

            <div
              className={`text-xl my-2 font-light ${
                mode === "bg-gray-900" ? "text-gray-50" : "text-gray-900"
              }`}
            >
              <h1 className="py-1">
                Author <span className={`${text} `}>:</span>
                <span className="text-gray-400">
                  {" "}
                  {props.data.volumeInfo.authors
                    ? props.data.volumeInfo.authors.map((author) => author)
                    : "Unknown"}
                </span>
              </h1>
              <h1 className="py-1">
                Gener <span className={`${text}`}>:</span>
                {
                  <span className="text-gray-400">
                    {" "}
                    {` ${
                      props.data.volumeInfo.categories
                        ? props.data.volumeInfo.categories[0]
                        : "Unknown"
                    }`}
                  </span>
                }
              </h1>
              <h1 className="py-1">
                Language <span className={`${text}`}>:</span>
                <span className="text-gray-400">
                  {" "}
                  {`${props.data.volumeInfo.language}`}
                </span>
              </h1>
              <h1 className="py-1">
                Pages <span className={`${text}`}>:</span>
                <span className="text-gray-400">
                  {" "}
                  {`${props.data.volumeInfo.pageCount}`}
                </span>
              </h1>
              <h1 className="py-1">
                published Date <span className={`${text}`}>:</span>
                <span className="text-gray-400">
                  {" "}
                  {`${props.data.volumeInfo.publishedDate}`}
                </span>
              </h1>
            </div>
          </div>

          <div className=" flex flex-wrap justify-around items-center gap-5">
            <button
              onClick={(e) => {
                setCartAdded(cartAdded === true ? false : true);

                user
                  ? cartAdded === false
                    ? addDocument({
                        uid: user.uid,
                        image:
                          props.data.volumeInfo.imageLinks &&
                          props.data.volumeInfo.imageLinks.thumbnail.concat(
                            "&fife=w700-h1000"
                          ),
                        title: props.data.volumeInfo.title,
                      })
                    : documents &&
                      documents.map((doc) => {
                        doc.title === props.data.volumeInfo.title &&
                          deleteDocument(doc.id);
                      })
                  : openModal(true);
              }}
              className={` shadow-sm shadow-[#0000006a] hover:shadow-md hover:shadow-[#0000006a] w-44 ${
                user && cartAdded === true ? "bg-green-300" : color
              } h-12 flex rounded-2xl justify-between hover:scale-105 transition-all duration-200 items-center text-xl p-5`}
            >
              <span>
                {user && cartAdded === true ? "Added" : "add to cart"}
              </span>
              <div
                className={`${
                  user && cartAdded === true ? "text-green-700 text-3xl" : text
                }  mt-1 `}
              >
                {user && cartAdded === true ? (
                  <ion-icon name="checkmark-outline"></ion-icon>
                ) : (
                  <ion-icon name="bag-add-outline"></ion-icon>
                )}
              </div>
            </button>
            <a
              target="_blank"
              href={props.data.accessInfo.webReaderLink}
              className={`shadow-sm shadow-[#0000006a] hover:shadow-md hover:shadow-[#0000006a] w-44 ${color} h-12 flex rounded-2xl justify-around hover:scale-105 transition-all duration-200 items-center text-xl p-5`}
            >
              <span>Demo</span>
              <div className={`${text}  mt-2 text-2xl`}>
                <ion-icon name="book-outline"></ion-icon>
              </div>
            </a>

            <a
              target="_blank"
              href={props.data.volumeInfo.infoLink}
              className={`shadow-sm shadow-[#0000006a] hover:shadow-md hover:shadow-[#0000006a] w-44 bg-gray-50 h-12 flex rounded-2xl justify-around hover:scale-105 transition-all duration-200 items-center text-xl p-5`}
            >
              <span>Playstore</span>
              <div className={`${text}  mt-2 text-2xl`}>
                <ion-icon name="logo-google-playstore"></ion-icon>
              </div>
            </a>
          </div>
        </div>
        <div>
          <BookshelfOption
            image={
              props.data.volumeInfo.imageLinks &&
              props.data.volumeInfo.imageLinks.thumbnail.concat(
                "&fife=w700-h1000"
              )
            }
            title={props.data.volumeInfo.title && props.data.volumeInfo.title}
          ></BookshelfOption>
        </div>
      </div>

      <div className="flex gap-10 pb-10 justify-around flex-col">
        <h1 className={`${text} text-3xl`}>Description</h1>
        <h1
          className={`${color} ${
            mode === "bg-gray-900"
              ? "text-gray-50 text-opacity-95"
              : "text-gray-900 text-opacity-80"
          } bg-opacity-20 p-5 rounded-2xl text-md font-extralight  leading-7`}
        >{` ${subText(props.data.volumeInfo.description, 999)}`}</h1>
      </div>
    </div>
  );
}
