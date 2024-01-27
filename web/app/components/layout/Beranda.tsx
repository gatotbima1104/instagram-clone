import React from "react";
import PostUser from "./Post";
import Mar from "@/app/src/assets/mar.jpeg";
import Tikus from "@/app/src/assets/tikus.jpeg";
import Ban from "@/app/src/assets/ban.png";

const BerandaUser = () => {
  return (
    <div>
      <PostUser
        description="masupilami adalah binatang indonesia"
        time="20"
        totalLikes={200}
        username="galih purnomo"
        imageSrc={Mar}
      />
      <PostUser
        description="masupilami adalah binatang indonesia"
        time="20"
        totalLikes={200}
        username="worker"
        imageSrc={Tikus}
      />
      <PostUser
        description="masupilami adalah binatang indonesia"
        time="20"
        totalLikes={200}
        username="sarip"
        imageSrc={Ban}
      />
    </div>
  );
};

export default BerandaUser;
