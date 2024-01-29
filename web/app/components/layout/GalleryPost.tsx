import React, { useState } from "react";
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import { FaRegComment } from "react-icons/fa6";
import { IGallery, IPost } from "@/app/interface/userInterface";

const GalleryPost: React.FC<IGallery> = ({
  imageSrc,
  totalLikes,
  totalComments,
}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setIsHovering(false);
    }, 100);
    return () => clearTimeout(timeoutId);
  };
  return (
    <div className="relative hover:cursor-pointer hover:opacity-60 transition-opacity">
      <Image
        src={imageSrc} // Assuming Mar is the source URL for the image
        alt="posts"
        className="w-[18.75rem] h-[18.75rem] object-cover"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {isHovering && (
        <div className="absolute flex items-center justify-center inset-0">
          <div className="p-4 rounded-lg flex">
            <p className="mr-2 text-white flex items-center gap-1">
              <GoHeart className="text-whit" /> {totalLikes}
            </p>
            <p className="text-white flex items-center gap-1">
              <FaRegComment className="text-white" /> {totalComments}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPost;
