import React from "react";
import { CircularTextBr } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-3 bottom-9 flex items-center justify-center overflow-hidden md:right-8 sm:right-0 md:left-auto md:top-2 md:bottom-auto md:absolute z-20">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularTextBr
          className={
            "fill-dark animate-spin-slow !w-36 md:!w-20 !h-34 md:!h-20 font-bold font-lg dark:fill-light "
          }
        />
        <Link
          href={"mailto:verasluca00@gmail.com"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full hover:bg-light hover:text-dark transition-all duration-300 text-center font-bold dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light md:w-12 md:h-12  text-sm md:text-[8px] dark:shadow-light/25"
        >
          Contratar
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
