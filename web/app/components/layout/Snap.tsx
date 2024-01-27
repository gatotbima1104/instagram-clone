'use client'
import React from "react";
import Image from "next/image";
import { IStatusUser } from "@/app/interface/userInterface";

const StatusProfile: React.FC<IStatusUser> = ({imageSrc, username}) => {
  return (
    <div className="flex flex-col items-center hover:cursor-pointer gap-2">
      <Image
        src={imageSrc}
        alt="profile-instagram"
        className="w-[3.5rem] h-[3.5rem] rounded-full border object-cover"
      />
      <p className="text-xs">{username}</p>
    </div>
  );
};

export default StatusProfile;
