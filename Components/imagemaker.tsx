import Image, { StaticImageData } from "next/image"
import React from "react"

interface NextImageConfig {
  url: string | StaticImageData
  width?: number
  height?: number
  alt?: string
  classes?: string
}

const NextImage: React.FC<NextImageConfig> = ({ url, width, height, alt, classes }) => {
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

export default NextImage
