import React from "react";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import StatusUser from "../components/Status";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex">
      {/* sidebar components */}
      <Sidebar />

      {/* main components */}
      <div className="border-l-2 h-screen flex flex-col w-[800px] border">
        <div className="p-5">
          {/* snap instagram */}
          <StatusUser />
        </div>

        <div className="h-screen flex justify-center">
          {/* beranda */}
          {/* Card timeline   */}
          <div className="border-b-2 flex">
            <div>
              {/* <Image></Image> */}
              <h3>Username</h3>
              <p>Date Upload</p>
              <button>More</button>
            </div>
            <div>{/* <Images></Images> */}</div>

            <div className="flex flex-col">
              <div className="flex justify-between">
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
                <img src="" alt="" />
              </div>

              <p>likes</p>
              <h4>account username</h4>
              <p>Description</p>

              <div>
                <button>view comment</button>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[400px] flex">
        <div className="flex justify-between">
          <img src="" alt="" />
          <div>
            <p>Username</p>
            <p>namefull</p>
          </div>
          <button>switch</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
