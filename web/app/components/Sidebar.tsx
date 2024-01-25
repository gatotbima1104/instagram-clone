import React from "react";
import Image from "next/image";
import LogoInstagram from "../src/assets/ig.png";
import { GoHomeFill } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { FaThreads } from "react-icons/fa6";
import { HiOutlineBars3 } from "react-icons/hi2";
import MenuBtn from "./btn/MenuBtn";

const Sidebar = () => {
  return (
    <div>
      <div className="items-center flex p-5">
        <Image
          src={LogoInstagram}
          alt="instagram-logo"
          className="object-fill"
          width={100}
        />
      </div>
      <div className="flex flex-col p-5 gap-2">
        <MenuBtn logo={GoHomeFill} text="Home" />
        <MenuBtn logo={LuSearch} text="Search" />
        <MenuBtn logo={MdOutlineExplore} text="Explore" />
        <MenuBtn logo={BiMoviePlay} text="Reels" />
        <MenuBtn logo={IoPaperPlaneOutline} text="Messages" />
        <MenuBtn logo={GoHeart} text="Notifications" />
        <MenuBtn logo={CiSquarePlus} text="Create" />
        <MenuBtn logo={CgProfile} text="Profile" />
      </div>
      {/* place this to the bottom  */}
      <div className="p-5 mt-24">
        <MenuBtn logo={FaThreads} text="Threads" />
        <MenuBtn logo={HiOutlineBars3} text="More" />
      </div>
    </div>
  );
};

export default Sidebar;
