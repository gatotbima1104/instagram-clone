import Sidebar from "./components/Sidebar";
import { MainPage } from "./components/Main";
import AccountSetting from "./components/AccountSetting";
import LayoutMain from "./components/LayoutMain";

export default function Home() {
  return (
    <LayoutMain>
      <MainPage />
      <AccountSetting />
    </LayoutMain>
  );
}
