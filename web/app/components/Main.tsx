import React from "react";
import SnapProfile from "./atomic/SnapProfile";
import { Snap } from "../constant/Snap";
import Mar from "@/app/src/assets/mar.jpeg";
import { Timeline } from "./layout/Timeline";
import { Timelines } from "../constant/Timeline";

export const MainPage = () => {
  return (
    <div className="col-span-6 me-24">
      <div className="grid grid-cols-8 my-5 overflow-x-auto">
        {Snap.map((item) => (
          <SnapProfile
            key={item.id}
            imageSrc={item.imageSrc}
            username={item.username}
          />
        ))}
      </div>

      {Timelines.map((item) => (
        <Timeline
          key={item.id}
          imageSrc={item.imageSrc}
          time={item.time}
          totalLikes={item.totalLikes}
          description={item.description}
          username={item.username}
        />
      ))}
    </div>
  );
};
