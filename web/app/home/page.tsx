import React from "react";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import { MainPage } from "../components/Main";
import AccountSetting from "../components/AccountSetting";

const HomePage = () => {
  const onLike = () => {};
  return (
    <div className="max-h-screen grid grid-cols-12 overflow-y-scroll">
        <Sidebar />
        <MainPage/>
        <AccountSetting/>
    </div>
  );
};

export default HomePage;
