"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { heroLinks } from "@/assets";
import { useState } from "react";

export default function Hero() {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });

    setIsMouseMoving(true);
  };

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(
    xSpring,
    [0, windowOffset.innerWidth],
    [-30, 30],
  );
  const rotateX = useTransform(
    ySpring,
    [0, windowOffset.innerHeight],
    [10, -50],
  );

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      className="grid h-screen place-items-center"
    >
      <div className="space-y-3">
        <motion.div
          className="relative flex items-center justify-center"
          style={{
            rotateX: isMouseMoving ? rotateX : 0,
            rotateY: isMouseMoving ? rotateY : 0,
            transition: "0.1s",
          }}
        >
          <Image
            src="/person.png"
            alt="Person Image"
            width={400}
            height={400}
            priority={true}
            className="h-auto w-[150px]"
          />
          <motion.span
            className="absolute text-4xl font-semibold text-white"
            initial={{ scale: 0 }}
            animate={{
              opacity: buttonHover ? 0 : 1,
              scale: buttonHover ? 2 : 0,
              y: buttonHover ? -40 : 0,
            }}
            transition={{ opacity: { delay: 0.4 } }}
          >
            Hi
          </motion.span>
        </motion.div>
        <div className="flex flex-col items-center gap-y-6">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl">
              My name is Hammas Shahid &
            </h1>
            <h2 className="text-lg font-light text-gray-700">
              I Like Building Websites 🤗
            </h2>
          </div>
          <div className="flex gap-10 text-3xl text-yellow-600 sm:text-2xl">
            {heroLinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="rounded-full p-1 transition-colors hover:bg-red-400 hover:text-white"
              >
                {link.icon}
              </Link>
            ))}
          </div>
          <Link
            href="#"
            className="rounded-lg bg-red-300 px-3 py-1 font-light tracking-wider text-white transition-colors hover:bg-red-500"
            onMouseOver={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            Talk to me
          </Link>
        </div>
      </div>
    </section>
  );
}
