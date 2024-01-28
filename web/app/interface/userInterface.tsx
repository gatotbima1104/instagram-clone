import { StaticImageData } from "next/image";
import React, { ElementType } from "react";

export interface IStatusUser {
  imageSrc: StaticImageData;
  username: string;
  fullName?: string;
  actionButton?: string;
  totalPost?: number;
  totalFollowing?: number;
  totalFollower?: number;
  usernameBio?: string;
  descriptionUser?: string;
  follower?: string[]
}

export interface IBtn {
  text: string;
  logo: React.ElementType;
}

export interface IPost {
  imageSrc: StaticImageData;
  username: string;
  time: string;
  totalLikes: number;
  description?: string;
}

export interface IUserProfile{
  imageSrc: StaticImageData;
  username?: string
}

export interface IProfileBtn{
  text?: string;
  logo?: React.ElementType;
}
