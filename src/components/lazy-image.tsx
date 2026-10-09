import * as React from "react";
import { Image } from "@chakra-ui/react";
import placeholder from "assets/images/placeholder.png";

type LazyImageProps = {
  src: string;
  blurHash: string;
  size?: string;
  width?: number;
  height?: number;
  layout?: string;
  rounded?: string;
};

const LazyImage = (props: LazyImageProps) => {
  const { src, width, height, size, layout, rounded } = props;

  return (
    <Image
      src={src}
      objectFit="cover"
      alt="cover image"
      width={width}
      height={height}
      rounded={rounded}
      fallbackSrc={placeholder}
    />
  );
};

export default LazyImage;
