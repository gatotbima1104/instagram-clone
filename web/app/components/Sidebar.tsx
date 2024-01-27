import React from "react";
import Image from "next/image";
import LogoInstagram from "../src/assets/ig.png";
import { FaThreads } from "react-icons/fa6";
import { HiOutlineBars3 } from "react-icons/hi2";
import MenuBtn from "./btn/MenuBtn";
import { Menu } from "../constant/Menu";

const Sidebar = () => {
  return (
    <div className="col-span-3 me-32 border">
      <div className="items-center flex p-5">
        <Image
          src={LogoInstagram}
          alt="instagram-logo"
          className="object-fill"
          width={100}
        />
      </div>
      <div className="flex flex-col p-5 gap-2">
        {Menu.map((item) => (
          <MenuBtn key={item.id} logo={item.logo} text={item.text} />
        ))}
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
