"use client";
import Image from "next/image";
import React from "react";

const ThumbnailImage = ({ thumbnails, title }) => {
  const [src, setSrc] = React.useState(thumbnails.highRes);

  const handleError = () => {
    // If highRes fails, switch to lowRes
    setSrc(thumbnails.lowRes);
  };
  return (
    <Image
      src={src}
      width={352}
      height={204}
      alt={title}
      onError={handleError} // Handle image load error
      priority // Optional: Optimize loading for important images
    ></Image>
  );
};

export default ThumbnailImage;
