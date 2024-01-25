import React from "react";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import StatusUser from "../components/Status";
import BerandaUser from "../components/Beranda";
import Tikus from "@/app/src/assets/tikus.jpeg"

const HomePage = () => {
  const onLike = () => {};
  return (
    <div className="w-full h-screen flex">
      {/* sidebar */}
      <div className="w-[15.20rem] h-screen justify-center fixed border-r-2">
        <Sidebar />
      </div>
      {/* main */}
      <div className="flex-1 border h-screen ml-0">
        <div className="mt-5">
          <StatusUser />
        </div>
        <div className="flex justify-center mt-5 flex-col items-center">
          <BerandaUser />
        </div>
      </div>
      {/* setting */}
      <div className="border ">
          <div className="w-[200px] h-[50px] hover:bg-slate-300 transition-all">
            
          </div>
      </div>

    </div>
  );
};

export default HomePage;
