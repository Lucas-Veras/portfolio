import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "./Icons";

const FramerImage = motion(Image);

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="relative w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2rem] rounded-br-3xl bg-dark md:-right-2 md:w-[101%] xs:h-[102%]  xs:rounded-[1.5rem] dark:bg-light " />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={github}
            target="_blank"
            className="text-left font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
