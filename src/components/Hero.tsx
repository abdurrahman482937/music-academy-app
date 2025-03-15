"use client";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";
import { Button } from "./ui/moving-border";

export default function Hero() {
  return (
    <div className="h-auto md:h-[55rem] w-full rounded-md flex items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-ful text-center">
      <Spotlight />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-[85px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you&apos;re a beginner or looking to refine
          your skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href="/courses">
            <Button borderRadius="1.75rem" className="z-50 bg-white dark:bg-zinc-950 text-black dark:text-white border-neutral-200 dark:border-slate-800">
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
