import React from "react";
import Image, { StaticImageData } from "next/image";

interface Status {
    imageSrc: StaticImageData,
    username: string
}

const StatusProfile: React.FC<Status> = ({imageSrc, username}) => {
  return (
    <div className="flex flex-col items-center hover:cursor-pointer">
      <button className="rounded-full bg-blue-50 p-3">
        <Image
          src={imageSrc}
          alt="snap-instagram"
          width={40}
          height={40}
          className="object-fit rounded-full"
        />
      </button>
      <p className="text-xs">{username}</p>
    </div>
  );
};

export default StatusProfile;
