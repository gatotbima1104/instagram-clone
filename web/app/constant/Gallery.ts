import React from "react";
import { StaticImageData } from "next/image";
import Cantik from "@/app/src/assets/download.jpeg";
import Post2 from "@/app/src/assets/cantik.jpeg";
import Hg5 from "@/app/src/assets/hg5.jpeg"

interface Post {
  id: number;
  imageSrc: StaticImageData;
  totalLikes: number;
  totalComments: number;
}

export const GalleryPosts: Post[] = [
  {
    id: 1,
    imageSrc: Cantik,
    totalComments: 80,
    totalLikes: 1990,
  },
  {
    id: 2,
    imageSrc: Post2,
    totalComments: 90,
    totalLikes: 394,
  },
  {
    id: 3,
    imageSrc: Hg5,
    totalComments: 90,
    totalLikes: 394,
  },
  {
    id: 4,
    imageSrc: Cantik,
    totalComments: 80,
    totalLikes: 1990,
  },
  {
    id: 5,
    imageSrc: Post2,
    totalComments: 90,
    totalLikes: 394,
  },
  {
    id: 6,
    imageSrc: Hg5,
    totalComments: 90,
    totalLikes: 394,
  },
];
