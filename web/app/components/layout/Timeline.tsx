import React from "react";
import PhotoProfile from "../atomic/PhotoProfile";
import { IoIosMore } from "react-icons/io";
import Image from "next/image";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BsChat, BsEmojiExpressionless } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";
import { IPost } from "@/app/interface/userInterface";

export const Timeline: React.FC<IPost> = ({
  imageSrc,
  totalLikes,
  username,
  description,
  time,
}) => {
  return (
    <div className="mx-[4.5rem] border-b-2 ">
      <div className="gap-2 flex flex-col pt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 mb-3 mt-5">
            <PhotoProfile imageSrc={imageSrc} />
            <a href="/profile" className="font-bold text-sm">
              {username}
            </a>
            <p>.</p>
            <p className="text-xs text-slate-600">{time} mnt</p>
          </div>
          <IoIosMore />
        </div>

        <div>
          <Image
            src={imageSrc}
            alt="image-blog"
            className="w-full h-[28rem] rounded object-cover"
          />
        </div>

        <div className="flex justify-between text-2xl">
          <div className="flex gap-3">
            <GoHeart />
            <BsChat />
            <IoPaperPlaneOutline />
          </div>
          <HiOutlineArchiveBoxArrowDown />
        </div>

        <p className="font-semibold text-xs mt-2">{totalLikes} likes</p>
        <div className="flex gap-3 items-center">
          <p className="text-xs text-justify">
            <span className="font-bold text-sm me-2">{username}</span>
            {description}
          </p>
        </div>
        <a href="" className="text-xs font-semibold">
          See translation
        </a>

        <div className="flex items-center gap-5 mb-5">
          <input
            type="text"
            className="focus:border-b-2 outline-none"
            placeholder="Add a comment"
            style={{ width: "500px" }}
          />
          <BsEmojiExpressionless />
        </div>
      </div>
    </div>
  );
};
