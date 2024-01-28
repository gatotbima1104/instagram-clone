import Sidebar from "./components/Sidebar";
import { MainPage } from "./components/Main";
import AccountSetting from "./components/AccountSetting";

export default function Home() {
  return (
    <div className="max-h-screen grid grid-cols-12 overflow-y-scroll">
      <Sidebar />
      <MainPage />
      <AccountSetting />
    </div>
  );
}
