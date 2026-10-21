"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

export default function ProductImage({
  src,
  alt,
  fallbackSrc = "/images/ash_handling_sys.jpg",
  className = "object-cover w-full h-full",
  fill = true,
  priority = false
}: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={hasError ? fallbackSrc : imgSrc}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      onError={() => {
        if (!hasError) {
          setHasError(true);
          setImgSrc(fallbackSrc);
        }
      }}
      className={className}
    />
  );
}
