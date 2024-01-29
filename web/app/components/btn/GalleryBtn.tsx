import React from "react";

interface IGalleryBtn {
  text: string;
  icon: React.ElementType;
}

const GalleryBtn: React.FC<IGalleryBtn> = ({ text, icon: IconLogo }) => {
  return (
    <>
      <button className="tracking-wider border-t-4 pt-3 flex items-center gap-1">
        <span className="text-base">
          <IconLogo />
        </span>
        {text}
      </button>
    </>
  );
};

export default GalleryBtn;
