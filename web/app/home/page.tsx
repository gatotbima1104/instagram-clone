import React from "react";
import { MainPage } from "../components/Main";
import LayoutMain from "../components/LayoutMain";
import AccountSetting from "../components/AccountSetting";

const HomePage = () => {
  const onLike = () => {};
  return (
    <LayoutMain>
      <MainPage />
      <AccountSetting />
    </LayoutMain>
  );
};

export default HomePage;
