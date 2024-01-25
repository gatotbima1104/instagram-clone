import React from "react";
import StatusProfile from "./status/Snap";
import BanUser from "../src/assets/ban.png";
import Tikus from "../src/assets/tikus.jpeg";
import Mar from "@/app/src/assets/mar.jpeg";
import Ig from "@/app/src/assets/ig.png";
import Profile from "@/app/src/assets/profile.png";

const StatusUser = () => {
  return (
    <div className="flex justify-center gap-4">
      <StatusProfile imageSrc={Profile} username="gatotbim" />
      <StatusProfile imageSrc={Tikus} username="bimakus" />
      <StatusProfile imageSrc={BanUser} username="galih" />
      <StatusProfile imageSrc={Ig} username="slit" />
      <StatusProfile imageSrc={BanUser} username="gatotbim" />
      <StatusProfile imageSrc={Mar} username="hanif" />
      <StatusProfile imageSrc={Ig} username="kholis" />
      <StatusProfile imageSrc={Profile} username="dzakwan" />
      <StatusProfile imageSrc={BanUser} username="gatotbim" />
    </div>
  );
};

export default StatusUser;
