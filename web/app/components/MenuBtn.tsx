import React from "react";

interface Btn {
  text: string;
  logo: React.ElementType;
}

const MenuBtn: React.FC<Btn> = ({ text, logo: LogoComponent }) => {
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
