import React from "react";

interface IButtonLogin {
  icon?: React.ElementType;
  text: string;
  color?: string; // Add color prop
  className : string; 
}

export const LoginBtn: React.FC<IButtonLogin> = ({
  text,
  icon: LogoComponent,
  color = "bg-blue-500", // Set default color
  className,
}) => {
  return (
    <>
      <button
        className={`my-5 ${color} text-white py-1 w-[15rem] rounded-lg flex items-center font-bold justify-center ${className}`}
      >
        {LogoComponent && <LogoComponent className="text-white me-2" />}
        {text}
      </button>
    </>
  );
};
