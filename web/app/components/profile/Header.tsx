import React from "react";
import Image from "next/image";
import ProfileBtn from "../btn/ProfileBtn";
import { IoIosMore } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { IStatusUser } from "@/app/interface/userInterface";

export const HeaderProfile: React.FC<IStatusUser> = ({
  username,
  imageSrc,
  totalPost,
  totalFollowing,
  totalFollower,
  usernameBio,
  descriptionUser,
  follower,
}) => {
  return (
    <div className="grid grid-cols-12 p-2 my-5">
      <div className="col-span-4 justify-center flex items-center">
        <Image
          src={imageSrc}
          alt="profile-logo"
          className="rounded-full w-[10rem] h-[10rem] object-cover border border-black"
        />
      </div>
      <div className="col-span-6 me-3 mt-2">
        <div className="font-semibold flex items-center justify-between">
          <h1 className="tracking-normal text-xl">{username}</h1>
          <ProfileBtn text="Following" logo={RiArrowDownSLine} />
          <ProfileBtn text="Message" />
          <ProfileBtn logo={IoPersonAddOutline} />
          <IoIosMore className="font-bold text-2xl" />
        </div>
        <div className="my-5 flex gap-10">
          <p className="me-5">
            <span className="font-bold">{totalPost}</span> post
          </p>
          <p className="me-5">
            <span className="font-bold">{totalFollower}</span> Followers
          </p>
          <p>
            <span className="font-bold">{totalFollowing}</span> Following
          </p>
        </div>

        <div>
          <h1>{usernameBio}</h1>
        </div>

        <div className="text-xs mt-2 mb-5">
          <p>{descriptionUser}</p>
        </div>

        <p className="text-xs text-slate-400">
          followed by{" "}
          <span className="font-semibold">
            {follower && follower.map((item) => item).join(', ')}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};
