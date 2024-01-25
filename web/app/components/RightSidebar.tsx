import Image from "next/image";
import { IStatusUser } from "../interface/userInterface";

const RightSidebar: React.FC<IStatusUser> = ({
  imageSrc,
  username,
  fullName,
}) => {
  return (
    <div>
      <Image src={imageSrc} alt="profile-picture" />
      <div>
        <h3 className="font-bold">{username}</h3>
        <p>{fullName}</p>
      </div>
    </div>
  );
};

export default RightSidebar;
