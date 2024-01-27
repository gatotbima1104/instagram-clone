import { IUserProfile } from "@/app/interface/userInterface";
import React from "react";
import Image from "next/image";

const PhotoProfile: React.FC<IUserProfile> = ({ imageSrc }) => {
  return (
    <>
      <Image
        src={imageSrc}
        alt="profile-logo"
        className="rounded-full w-[2.5rem] h-[2.5rem] object-cover border border-black"
      />
    </>
  );
};

export default PhotoProfile;
