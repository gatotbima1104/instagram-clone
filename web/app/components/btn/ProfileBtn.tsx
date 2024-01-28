import { IProfileBtn } from "@/app/interface/userInterface";
import React from "react";

const ProfileBtn: React.FC<IProfileBtn> = ({ text, logo: LogoComponent }) => {
  return (
    <button className="h-[30px] rounded text-sm bg-slate-200 hover:bg-slate-300 flex items-center justify-center px-3">
      {text && <div className="me-1">{text}</div>}
      {LogoComponent && <LogoComponent />}
    </button>
  );
};

export default ProfileBtn;
