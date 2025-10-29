"use client";

import { getImageProps } from "@/config/images";
import NextImage from "next/image";
import React, { useState } from "react";
import { ImageProps } from "@/types";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export function Image({
  src,
  alt,
  className = "",
  width,
  height,
  fill = false,
  sizes,
  priority = false,
  quality,
  style,
  onError,
  context = "below-fold",
}: ImageProps) {
  const [didError, setDidError] = useState(false);

  // Get optimized props based on context
  const optimizedProps = getImageProps(context);

  const handleError = () => {
    setDidError(true);
    onError?.();
  };

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={ERROR_IMG_SRC}
            alt="Error loading image"
            data-original-url={src}
            className={className}
            style={style}
          />
        </div>
      </div>
    );
  }

  // Build common props
  const commonProps = {
    src,
    alt,
    quality: quality || optimizedProps.quality,
    priority: priority || optimizedProps.priority,
    loading: optimizedProps.loading,
    placeholder: optimizedProps.placeholder,
    blurDataURL: optimizedProps.blurDataURL,
    onError: handleError,
  };

  // Build conditional props based on usage pattern
  const conditionalProps = (() => {
    if (width && height) {
      // Fixed dimensions
      return {
        width,
        height,
        className,
        style,
      };
    }

    if (fill) {
      // Fill container
      return {
        fill: true,
        sizes,
        className: "object-cover",
      };
    }

    // Default fallback
    return {
      width: 800,
      height: 600,
      className,
      style,
    };
  })();

  // Render with fill wrapper if needed
  if (fill) {
    return (
      <div className={`relative ${className}`} style={style}>
        <NextImage {...commonProps} {...conditionalProps} />
      </div>
    );
  }

  // Single NextImage component for all cases
  return <NextImage {...commonProps} {...conditionalProps} />;
}
