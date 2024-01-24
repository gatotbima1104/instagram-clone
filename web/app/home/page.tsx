import React from "react";
import Image from "next/image";
import LogoInstagram from "../src/assets/ig.png";
import Profile from "../src/assets/profile.png"
import Sidebar from "../components/Sidebar";


const HomePage = () => {
  return (
    <div className="w-full h-screen flex">
      {/* sidebar components */}
      <Sidebar/>
      
      {/* main components */}
      <div className="border-l-2 h-screen w-full flex flex-col">
        <div className="border bg-blue-300 p-5">
          {/* snap instagram */}
          <div className="grid grid-cols-12 gap-4">
            <div className="border flex flex-col items-center gap-2">
              <button className="rounded-full border bg-blue-50 p-3">
                <Image
                  src={Profile}
                  alt="snap-instagram"
                  width={50}
                  height={50}
                  className="object-contain rounded-full"
                />
              </button>
              <p className="text-xs">gatotbim</p>
            </div>
            <div className="border flex flex-col items-center gap-2">
              <button className="rounded-full border bg-blue-50 p-3">
                <Image
                  src={LogoInstagram}
                  alt="snap-instagram"
                  width={20}
                  height={20}
                  className="object-contain rounded-full"
                />
              </button>
              <p className="text-xs">gatotbim</p>
            </div>
            <div className="border flex flex-col items-center gap-2">
              <button className="rounded-full border bg-blue-50 p-3">
                <Image
                  src={LogoInstagram}
                  alt="snap-instagram"
                  width={20}
                  height={20}
                  className="object-contain rounded-full"
                />
              </button>
              <p className="text-xs">gatotbim</p>
            </div>
          </div>
        </div>
        <div className="bg-red-200">
          {/* beranda */}
          <h1>beranda</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
