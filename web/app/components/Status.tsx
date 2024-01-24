import React from "react";
import StatusProfile from "./status/Snap";
import BanUser from "../src/assets/ban.png";
import Tikus from "../src/assets/tikus.jpeg";

const StatusUser = () => {
  return (
    <div className="grid grid-cols-8">
      <StatusProfile imageSrc={BanUser} username="gatotbim" />
      <StatusProfile imageSrc={Tikus} username="bimakus" />
      <StatusProfile imageSrc={BanUser} username="galih" />
      <StatusProfile imageSrc={Tikus} username="purnomo" />
      <StatusProfile imageSrc={BanUser} username="gatotbim" />
      <StatusProfile imageSrc={BanUser} username="gatotbim" />
      <StatusProfile imageSrc={BanUser} username="gatotbim" />
      <StatusProfile imageSrc={BanUser} username="gatotbim" />
    </div>
  );
};

export default StatusUser;
