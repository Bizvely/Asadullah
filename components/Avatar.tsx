
"use client";

import { useEffect, useRef, useState } from "react";

type AvatarProps = {
  src: string;
  alt: string;
  initials: string;
};

export default function Avatar({
  src,
  alt,
  initials,
}: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-600 to-cyan-500 text-6xl font-black text-white"
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      width={480}
      height={480}
      className="h-full w-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}
