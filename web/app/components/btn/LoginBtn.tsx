import React from "react";

interface IButtonLogin {
  icon?: React.ElementType;
  text: string;
  color?: string; // Add color prop
}

export const LoginBtn: React.FC<IButtonLogin> = ({
  text,
  icon: LogoComponent,
  color = "bg-blue-500", // Set default color
}) => {
  return (
    <>
      <button
        className={`my-5 ${color} text-white py-1 w-[15rem] rounded flex items-center font-bold justify-center`}
      >
        {LogoComponent && <LogoComponent className="text-white me-2" />}
        {text}
      </button>
    </>
  );
};
