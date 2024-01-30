import React from "react";
import LayoutMain from "../components/LayoutMain";
import Image from "next/image";
import Bcl from "@/app/src/assets/bcl.jpeg";
import { Explore } from "../constant/Explore";

const page = () => {
  return (
    <LayoutMain>
      <div className="mt-5 me-28">
        <div className="grid grid-cols-3 grid-rows-2 h-[38.125rem]">
          <div className="col-span-2 ms-5">
            <div className="grid grid-cols-2 gap-1">
                {Explore && Explore.map((item)=> (
                    <Image
                    key={item.id}
                    alt={item.alt}
                    src={item.imageSrc}
                    className="w-[18.75rem] h-[18.75rem] object-cover"
                  />
                ))}
            </div>
          </div>

          <div className="col-span-1 ms-1 me-2">
            <Image
              alt="image"
              src={Bcl}
              className="w-[400px] h-[605px] object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 h-[38.125rem]">
          <div className="col-span-1 ms-5 -me-2">
            <Image
              alt="image"
              src={Bcl}
              className="w-[400px] h-[605px] object-cover"
            />
          </div>
          <div className="col-span-2 ms-3 -me-2">
            <div className="grid grid-cols-2 gap-1">
              <Image
                alt="image"
                src={Bcl}
                className="w-[18.75rem] h-[18.75rem] object-cover"
              />
              <Image
                alt="image"
                src={Bcl}
                className="w-[18.75rem] h-[18.75rem] object-cover -ms-2"
              />

              <Image
                alt="image"
                src={Bcl}
                className="w-[18.75rem] h-[18.75rem] object-cover"
              />
              <Image
                alt="image"
                src={Bcl}
                className="w-[18.75rem] h-[18.75rem] object-cover -ms-2"
              />
            </div>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default page;
