import Layout from "@/pages/layout";
import Head from "next/head";
import Image from "next/image";
import ProfilePic from "public/images/profile/developer-pic-1.png";
import LightBulb from "public/images/svgs/miscellaneous_icons_1.svg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Oliveira Véras - Home</title>
        <meta name="description" content="Lucas Oliveira Véras - Sobre" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 xl:!pt-10 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={ProfilePic}
                alt="Lucas Oliveira Véras"
                className="w-full h-full lg:hidden md:inline-block md:w-full"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text={"Transformando ideias em realidade com código."}
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl !normal-case"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Como um desenvolvedor full-stack, me dedico a transformar ideias
                em aplicações inovadoras. Explore meus projetos mais
                recentes, mostrando minha experiência em desenvolvimento web e
                mobile.
              </p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/pdfs/Currículo (Lucas Oliveira Véras).pdf"
                  target="_blank"
                  className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
                >
                  Currículo <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:verasluca00@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Entre em contato
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={LightBulb} alt="CodeBucks" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
