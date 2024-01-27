import React from "react";
import Image from "next/image";
import { CiMenuKebab } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { FaRegComment } from "react-icons/fa6";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { PiArchiveTray } from "react-icons/pi";
import { RiEmotionNormalLine } from "react-icons/ri";
import { IPost } from "../../interface/userInterface";

const PostUser: React.FC<IPost> = ({
  imageSrc,
  username,
  time,
  totalLikes,
  description,
}) => {
  return (
    <div className="border-b-2 mt-5">
      <div className="mb-5 flex gap-4 items-center">
        <Image
          src={imageSrc}
          alt="profile-logo"
          className="rounded-full w-[2.5rem] h-[2.5rem] object-cover"
        />

        <div className="ms-0">
          <div className="flex gap-1">
            <h4 className="font-bold">{username}</h4>
            <p className="text-slate-500 ">.</p>
            <p className="text-slate-500 ">{time} m</p>
          </div>
          <p className="text-xs">original audio</p>
        </div>

        <CiMenuKebab className="rotate-90 items-end flex" />
      </div>

      <Image
        src={imageSrc}
        alt="gambar-upload"
        className="w-[450px] h-[450px] object-contain"
      />

      <div className="flex justify-between my-3">
        <div className="flex gap-2">
          <button>
            <GoHeart className="text-2xl font-bold" />
          </button>
          <button>
            <FaRegComment className="text-2xl" />
          </button>
          <button>
            <IoPaperPlaneOutline className="text-2xl" />
          </button>
        </div>

        <button>
          <PiArchiveTray className="text-2xl" />
        </button>
      </div>

      <p>{totalLikes} likes</p>

      <div className="flex gap-3 items-center">
        <h4 className="font-bold">{username}</h4>
        <p className="text-xs">
          {description} <br />{" "}
        </p>
      </div>

      <button className="text-slate-500 my-2">View all comments</button>

      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment"
          className="placeholder:text-slate-500 my-3 w-[400px] focus-visible:border-b-2 focus:outline-none"
        />
        <RiEmotionNormalLine />
      </div>
    </div>
  );
};

export default PostUser;
