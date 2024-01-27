import React from "react";
import Mar from "@/app/src/assets/mar.jpeg";
import { ProfileSetting } from "./layout/ProfileSetting";
import { SuggestedProfile } from "./layout/Suggested";

const AccountSetting = () => {
  return (
    <div className="col-span-3 me-16 flex flex-col mt-5">
      <div className="my-5">
        <ProfileSetting
          imageSrc={Mar}
          username="gatotbim"
          fullName="muhamad gatot Supadin"
          actionButton="switch"
        />
      </div>

      <div>
        <div className="flex justify-between items-center">
          <p className="text-slate-600 text-sm font-semibold mb-2">
            Suggested for you{" "}
          </p>
          <a
            href=""
            className="hover:text-black text-xs text-slate-700 font-bold"
          >
            See all
          </a>
        </div>

        <SuggestedProfile />
      </div>
    </div>
  );
};

export default AccountSetting;
