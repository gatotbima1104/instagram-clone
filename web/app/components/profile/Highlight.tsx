import React from "react";
import Image from "next/image";
import Mar from "@/app/src/assets/balmon.jpeg";
import { Higlight } from "@/app/constant/Highlight";

const HighlightUser = () => {
  return (
    <div className="flex gap-9 mx-24 overflow-x-auto no-scrollbar scroll-smooth my-5">
      {Higlight.map((item) => (
        <Image
          key={item.id}
          src={item.src}
          alt={item.alt}
          className="rounded-full border border-black w-[80px] h-[80px] object-cover"
        />
      ))}
    </div>
  );
};

export default HighlightUser;
