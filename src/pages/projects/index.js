import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/pages/layout";
import Head from "next/head";
import avasusImg from "public/images/projects/avasus.png";
import FeaturedProject from "./components/FeaturedProject";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Lucas Oliveira Véras | Projetos</title>
        <meta name="description" content="Lucas Oliveira Véras | Projetos" />
      </Head>
      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination trumps Knowledge"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-5xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                title={"Avasus"}
                img={avasusImg}
                summary={
                  "Esse projeto foi feito na época como um teste de bolsa que acabei passando em primeiro lugar porém não cheguei a atuar nessa bolsa, pois outras oportunidades melhores apareceram na época. Em geral, o Avasus é uma plataforma de ensino a distância que tem como objetivo capacitar profissionais de saúde para atuar no Sistema Único de Saúde (SUS). Esse projeto foi feito com ReactJS, nessa época não tinha tanto conhecimento em ReactJS e foi um desafio enorme para mim, porém consegui entregar o projeto e passar no teste, por mais que não conhecesse sobre arquitetura de pastas e boas práticas de programação."
                }
                link="https://avasus.vercel.app/"
                github="https://github.com/Lucas-Veras/avasus"
                type={"Projeto em destaque"}
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Crypto Screener Application"}
                img={project1}
                summary={
                  " A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link="/"
                github="/"
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title={"Crypto Screener Application"}
                img={project1}
                summary={
                  " A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link="/"
                github="/"
                type={"Featured Project"}
              />
            </div>

            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                title={"Crypto Screener Application"}
                img={project1}
                summary={
                  " A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link="/"
                github="/"
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title={"Crypto Screener Application"}
                img={project1}
                summary={
                  " A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link="/"
                github="/"
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title={"Crypto Screener Application"}
                img={project1}
                summary={
                  " A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link="/"
                github="/"
                type={"Featured Project"}
              />
            </div> */}
          </div>
          <AnimatedText
            text="Em breve mais projetos..."
            className="!mb-0 !mt-16 !text-4xl lg:!text-2xl sm:mb-8 sm:!text-2xl xs:text-xl"
          />
        </Layout>
      </main>
    </>
  );
};

export default Projects;
