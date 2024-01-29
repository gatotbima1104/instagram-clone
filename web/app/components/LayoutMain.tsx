import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutMainProps {
  children: ReactNode | ReactNode[];
}

const LayoutMain: React.FC<LayoutMainProps> = ({
  children,
}: LayoutMainProps) => {
  return (
    <>
      <div className="grid grid-cols-12 hide-scroll max-h-screen overflow-y-scroll scroll-smooth">
        <Sidebar />
        <div className="col-span-8 hide-scroll overflow-y-scroll h-screen flex overflow-x-hidden -me-24">
          {children}
        </div>
      </div>
    </>
  );
};

export default LayoutMain;
