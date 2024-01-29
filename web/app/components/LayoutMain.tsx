import Sidebar from "./Sidebar";
import AccountSetting from "./AccountSetting";

const LayoutMain = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <div className="grid grid-cols-12 hide-scroll max-h-screen overflow-y-scroll">
        <Sidebar />
        <div className="col-span-5 hide-scroll overflow-y-scroll  h-screen ">
          {children}
        </div>
        <AccountSetting />
      </div>
    </>
  );
};

export default LayoutMain;
