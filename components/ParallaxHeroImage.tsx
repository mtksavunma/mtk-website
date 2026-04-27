"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type ParallaxHeroImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  blurClassName?: string;
  scaleClassName?: string;
  offset?: number;
};

export default function ParallaxHeroImage({
  src,
  alt,
  priority = false,
  blurClassName = "blur-[1px]",
  scaleClassName = "scale-[1.01]",
  offset = 80,
}: ParallaxHeroImageProps) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 900], [0, offset]);

  return (
    <motion.div
      style={{ y }}
      className="absolute inset-0 will-change-transform"
      aria-hidden="true"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className={`pointer-events-none select-none object-cover object-center ${blurClassName} ${scaleClassName}`}
      />
    </motion.div>
  );
}