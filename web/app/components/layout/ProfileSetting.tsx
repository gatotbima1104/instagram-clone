import React from "react";
import PhotoProfile from "../atomic/PhotoProfile";
import { IStatusUser } from "@/app/interface/userInterface";

export const ProfileSetting: React.FC<IStatusUser> = ({
  imageSrc,
  username,
  fullName,
  actionButton
}) => {
  return (
    <>
      <div className="flex justify-between items-center my-2">
        <div className="flex items-center">
          <PhotoProfile imageSrc={imageSrc} />
          <div className="ms-4">
            <h3 className="font-semibold text-base">{username}</h3>
            <p className="text-slate-500 text-sm">{fullName}</p>
          </div>
        </div>
        <div className="hover:text-black text-xs text-blue-500">
          <a href="">{actionButton}</a>
        </div>
      </div>
    </>
  );
};
