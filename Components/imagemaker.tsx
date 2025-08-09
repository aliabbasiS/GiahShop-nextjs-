import Image from "next/image";
import React from "react";
import s from '../public/main/credit_card.png'
interface NextImageConfig {
  url: string 
  width?: number
  height?: number
  alt?: string
  classes?:string
}

const NextImage: React.FC<NextImageConfig> = ({ url, width, height, alt,classes }) => {
  return (
    <Image
      src={url}
      width={width || 500}  
      height={height || 500} 
      alt={alt || "Image"}   
      className={classes}
    />
  )
}

export default NextImage;
