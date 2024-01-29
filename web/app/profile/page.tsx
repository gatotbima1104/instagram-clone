import React from "react";
import { HeaderProfile } from "../components/profile/Header";
import BCL from "@/app/src/assets/bcl.jpeg";
import HighlightUser from "../components/profile/Highlight";
import Gallery from "../components/profile/Gallery";
import LayoutMain from "../components/LayoutMain";

export const ProfilePage = () => {
  const followers = ["yoga", "galih", "hanif"];
  return (
    <LayoutMain>
      <div className="-ms-20">
        <HeaderProfile
          imageSrc={BCL}
          username="Citra Lestari"
          totalFollower={80}
          totalPost={200}
          totalFollowing={899}
          usernameBio="penyanyi indonesia"
          descriptionUser="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, repellat. Labore saepe esse non reprehenderit laudantium provident nemo eos et sapiente cum, alias sequi possimus itaque quidem consequatur officia beatae ex est molestias vel dignissimos numquam optio deserunt eum? Obcaecati, ducimus? Excepturi soluta minus fuga reprehenderit deleniti nostrum modi. Maxime?"
          follower={followers}
        />
        <HighlightUser />
        <Gallery />
      </div>
    </LayoutMain>
  );
};

export default ProfilePage;
