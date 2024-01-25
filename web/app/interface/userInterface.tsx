import { StaticImageData } from "next/image";

export interface IStatusUser {
  imageSrc: StaticImageData;
  username: string;
  fullName?: string;
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
