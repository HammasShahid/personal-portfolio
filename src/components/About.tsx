import Image from "next/image";
import Link from "next/link";
import Heading from "./sub/Heading";
import {
  aboutText,
  achievements,
  DownloadLineIcon,
  ArrowLeftSFillIcon,
} from "@/assets";
import Achievement from "./sub/Achievement";

export default function About() {
  return (
    <section className="grid min-h-screen place-items-center">
      <div className="flex w-[min(1200px,90%)] flex-col gap-14 sm:w-full sm:p-3">
        <Heading text="About Me"></Heading>
        <div className="flex justify-between md:justify-center">
          <Image
            src="/about-me.png"
            alt="Person image"
            width={300}
            height={300}
            className="h-auto w-[300px] lg:w-[200px] md:hidden"
          />
          <div className="relative flex h-max flex-col items-start gap-4 rounded-lg bg-zinc-100 p-5">
            <span className="absolute -left-4 top-24 scale-[2.5] text-zinc-100 md:hidden">
              <ArrowLeftSFillIcon />
            </span>
            <p className="text-lg font-light tracking-wide text-gray-600 first-letter:pl-3 lg:text-[16px] sm:text-[14px]">
              {aboutText}
            </p>

            <Link
              href="/cv"
              className="flex w-max gap-4 rounded-full bg-red-400 px-3 py-2 font-light tracking-wider text-white transition-colors hover:bg-red-500"
            >
              Download CV <DownloadLineIcon />
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-between">
          {achievements.map((a) => (
            <Achievement
              key={a.title}
              amount={a.amount}
              title={a.title}
              icon={a.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
