import React from "react";
import Sidebar from "../components/Sidebar";
import { HeaderProfile } from "../components/profile/Header";
import Balmon from "@/app/src/assets/balmon.jpeg";

export const ProfilePage = () => {
  const followers = ["yoga", "galih", "hanif"];
  return (
    <div className="max-h-screen grid grid-cols-12 overflow-y-scroll">
      <Sidebar />
      <div className="col-span-9">
        <HeaderProfile
          imageSrc={Balmon}
          username="balmond"
          totalFollower={70}
          totalPost={20}
          totalFollowing={899}
          usernameBio="fighter-only braderr"
          descriptionUser="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, repellat. Labore saepe esse non reprehenderit laudantium provident nemo eos et sapiente cum, alias sequi possimus itaque quidem consequatur officia beatae ex est molestias vel dignissimos numquam optio deserunt eum? Obcaecati, ducimus? Excepturi soluta minus fuga reprehenderit deleniti nostrum modi. Maxime?"
          follower={followers}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
