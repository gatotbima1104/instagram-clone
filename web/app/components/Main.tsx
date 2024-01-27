import React from "react";
import SnapProfile from "./atomic/SnapProfile";
import { Snap } from "../constant/Snap";

export const MainPage = () => {
  return (
    <div className="col-span-6 me-24">
      <div className="grid grid-cols-8 my-5">
        {Snap.map((item) => (
          <SnapProfile
            key={item.id}
            imageSrc={item.imageSrc}
            username={item.username}
          />
        ))}
      </div>
    </div>
  );
};
