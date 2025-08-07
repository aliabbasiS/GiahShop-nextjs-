import Image from "next/image";
import React from "react";

interface NextImageConfig {
  url: string
  width?: number
  height?: number
  alt?: string
}

const NextImage: React.FC<NextImageConfig> = ({ url, width, height, alt }) => {
  return (
    <Image
      src={url}
      width={width || 500}  
      height={height || 500} 
      alt={alt || "Image"}   
    />
  )
}

export default NextImage;
