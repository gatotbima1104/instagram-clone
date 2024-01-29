"use client";

import { useState } from "react";
import Image from "next/image";
import Mar from "@/app/src/assets/mar.jpeg";
import Cantik from "@/app/src/assets/download.jpeg";
import { LuContact } from "react-icons/lu";
import { PiSquaresFourLight } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { FaRegComment } from "react-icons/fa6";
import GalleryPost from "../layout/GalleryPost";
import { GalleryPosts } from "@/app/constant/Gallery";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center my-5">
      <div className="grid grid-cols-2 text-slate-500 font-semibold text-sm gap-10 py-7 px-96 h-full">
        <button className="tracking-wider border-t-2 pt-3 flex items-center gap-1">
          <span className="text-base">
            <PiSquaresFourLight />
          </span>
          POSTS
        </button>
        <button className="tracking-wider pt-3 flex items-center gap-1">
          <span className="text-base">
            <LuContact />
          </span>
          TAGGED
        </button>
      </div>
      <div className="grid grid-cols-3 gap-1">
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
