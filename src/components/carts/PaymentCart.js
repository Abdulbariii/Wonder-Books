import React from "react";
import useAuth from "../../hook/useAuth";
import useTheme from "../../hook/useTheme";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import LocationMarker from "./LocatinMarker";
export default function PaymentCart({ documents }) {
  const { color, text, mode } = useTheme();
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-3">
      <h1
        className={`text-2xl font-light  flex  gap-2 items-center ${
          mode === "bg-gray-900" ? "text-white" : "text-black"
        }`}
      >
        Total books :{" "}
        <span className={`${text} font-medium `}>
          {documents && documents.length}
        </span>
        <ion-icon name="bag-add-outline"></ion-icon>
      </h1>

      <form
        className={`flex flex-col ${color} bg-opacity-30 gap-10 justify-center items-start p-5 md:w-96 w-80 rounded-2xl`}
      >
        <label htmlFor="Name" className="flex-col flex gap-3">
          <span
            className={`text-xl  font-light ${
              mode === "bg-gray-900"
                ? "text-gray-50 text-opacity-95"
                : "text-gray-900 text-opacity-80"
            }`}
          >
            Name
          </span>
          <input
            disabled
            id="Name"
            type={"Name"}
            value={user.displayName}
            className="w-72 text-xl md:w-80 h-10 rounded-2xl p-5"
          ></input>
        </label>
        <label htmlFor="email" className="flex-col flex gap-3">
          <span
            className={`text-xl  font-light ${
              mode === "bg-gray-900"
                ? "text-gray-50 text-opacity-95"
                : "text-gray-900 text-opacity-80"
            }`}
          >
            Email
          </span>
          <input
            disabled
            id="email"
            value={user.email}
            className="w-72 md:w-80  text-xl h-10 rounded-2xl p-5"
          ></input>
        </label>
        <label htmlFor="ph" className="flex-col flex gap-3">
          <span
            className={`text-xl  font-light ${
              mode === "bg-gray-900"
                ? "text-gray-50 text-opacity-95"
                : "text-gray-900 text-opacity-80"
            }`}
          >
            Phone number
          </span>
          <input
            id="ph"
            placeholder="+964"
            className="w-72 md:w-80  text-xl h-10 rounded-2xl p-5"
          ></input>
        </label>
        <div className="flex-col flex gap-3">
          <h1
            className={`text-xl  font-light ${
              mode === "bg-gray-900"
                ? "text-gray-50 text-opacity-95"
                : "text-gray-900 text-opacity-80"
            }`}
          >
            Address
          </h1>
          <MapContainer
            className="w-72 md:w-80 h-56 rounded-2xl"
            center={{ lat: 36.191113, lng: 44.009167 }}
            zoom={12}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
          </MapContainer>
          ,
        </div>

        <h1
          className={`text-2xl  ${
            mode === "bg-gray-900"
              ? "text-gray-50 text-opacity-95"
              : "text-gray-900 text-opacity-80"
          } `}
        >
          Sorry our payment could not be worked for now
          <ion-icon name="sad-outline"></ion-icon>
        </h1>
        <button
          disabled
          type="sumbit"
          className={`w-72 md:w-80  text-xl flex justify-center items-center h-10 ${color} rounded-2xl`}
        >
          Payment
        </button>
      </form>
    </div>
  );
}
