"use client";

import { LuContact } from "react-icons/lu";
import { PiSquaresFourLight } from "react-icons/pi";
import GalleryPost from "../layout/GalleryPost";
import { GalleryPosts } from "@/app/constant/Gallery";
import GalleryBtn from "../btn/GalleryBtn";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center border-t-2">
      <div className="flex text-slate-500 font-semibold text-sm gap-10 px-96 h-full">
        <GalleryBtn text="POSTS" icon={PiSquaresFourLight} />
        <GalleryBtn text="TAGGED" icon={LuContact} />
      </div>
      <div className="grid grid-cols-3 gap-1 py-5">
        {GalleryPosts &&
          GalleryPosts.map((item) => (
            <GalleryPost
              key={item.id}
              imageSrc={item.imageSrc}
              totalLikes={item.totalLikes}
              totalComments={item.totalComments}
            />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
