import React from "react";
import { ProfileSetting } from "./ProfileSetting";
import { Suggested } from "@/app/constant/Suggested";

export const SuggestedProfile = () => {
  return (
    <>
      {Suggested.map((item) => (
        <ProfileSetting
          key={item.id}
          imageSrc={item.imageSrc}
          fullName={item.fullName}
          username={item.username}
          actionButton={item.actionButton}
        />
      ))}

      <div className="my-5">
        <p className="text-slate-400 text-xs mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam
          culpa inventore qui atque at, accusamus facilis sint dolor ratione.
        </p>
        <p className="text-slate-400 text-sm">@ Licensed by @gatotbima2002</p>
      </div>
    </>
  );
};
