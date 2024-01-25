import { IBtn } from "@/app/interface/userInterface";
import React from "react";

const MenuBtn: React.FC<IBtn> = ({ text, logo: LogoComponent }) => {
  return (
    <button className="rounded hover: cursor-pointer hover:bg-slate-200 transition-all flex gap-5 py-3 w-full ps-2 justify-start">
      <div className="text-2xl hover:scale-110">
        <LogoComponent />
      </div>
      {text}
    </button>
  );
};

export default MenuBtn;
