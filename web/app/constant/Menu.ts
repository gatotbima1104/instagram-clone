import { BiMoviePlay } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { CiSquarePlus } from "react-icons/ci";
import { GoHeart, GoHomeFill } from "react-icons/go";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { MdOutlineExplore } from "react-icons/md";

export const Menu = [
  {
    id: 1,
    logo: GoHomeFill,
    text: "Home",
  },
  {
    id: 2,
    logo: LuSearch,
    text: "Search",
  },
  {
    id: 3,
    logo: MdOutlineExplore,
    text: "Explore",
  },
  {
    id: 4,
    logo: BiMoviePlay,
    text: "Reels",
  },
  {
    id: 5,
    logo: IoPaperPlaneOutline,
    text: "Messages",
  },
  {
    id: 6,
    logo: GoHeart,
    text: "Notification",
  },
  {
    id: 7,
    logo: CiSquarePlus,
    text: "Create",
  },
  {
    id: 8,
    logo: CgProfile,
    text: "Profile",
  },
];
