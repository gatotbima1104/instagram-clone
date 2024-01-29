import { IUserProfile } from "@/app/interface/userInterface";
import React from "react";
import Image from "next/image";

const SnapProfile: React.FC<IUserProfile> = ({ imageSrc, username  }) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <Image
        src={imageSrc}
        alt="profile-logo"
        className="rounded-full w-[3.5rem] h-[3.5rem] object-cover border border-slate-200"
      />
      <p className="text-xs">{username}</p>
    </div>
  );
};

export default SnapProfile;
