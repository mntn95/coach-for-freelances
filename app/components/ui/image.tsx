'use client'

import React, { useState } from 'react'
import NextImage from 'next/image'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  fill?: boolean
  sizes?: string
  priority?: boolean
  quality?: number
  style?: React.CSSProperties
  onError?: () => void
}

export function Image({
  src,
  alt,
  className = '',
  width,
  height,
  fill = false,
  sizes,
  priority = false,
  quality,
  style,
  onError,
}: ImageProps) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
    onError?.()
  }

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
    )
  }

  // If width/height are provided, use them
  if (width && height) {
    return (
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        quality={quality}
        priority={priority}
        onError={handleError}
        style={style}
      />
    )
  }

  // If fill is true, use fill
  if (fill) {
    return (
      <div className={`relative ${className}`} style={style}>
        <NextImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          quality={quality}
          priority={priority}
          onError={handleError}
        />
      </div>
    )
  }

  // Default: render with inline image if no dimensions specified
  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      quality={quality}
      priority={priority}
      onError={handleError}
      style={style}
      width={800}
      height={600}
    />
  )
}

