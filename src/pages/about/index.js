import AnimatedText from "@/components/global/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/global/TransitionEffect";
import useAnimateNumbers from "@/hooks/useAnimateNumbers";
import Layout from "@/pages/layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "public/images/profile/fotoDePerfil.jpg";

const AnimatedNumbers = ({ value }) => {
  const { ref } = useAnimateNumbers({ value });

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Lucas Oliveira Véras - Sobre</title>
        <meta name="description" content="Lucas Oliveira Véras - Sobre" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Lucas Oliveira Véras"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-center justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 self-start text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biografia
              </h2>

              <p className="font-medium">
                Olá, meu nome é <strong>Lucas Oliveira Véras</strong>, tenho 20
                anos e sou desenvolvedor web e mobile, acumulando mais de 7
                meses de experiência na área. Tenho um profundo comprometimento
                em transformar as ideias dos meus clientes em realidade, sempre
                buscando maneiras inovadoras de criar experiências digitais
                incríveis.
              </p>

              <p className="my-4 font-medium">
                Além disso, minha abordagem é pautada pela constante busca por
                aprimoramento, motivo pelo qual estou sempre aberto a aprender
                novas tecnologias. Acredito que essa mentalidade de aprendizado
                contínuo é crucial para acompanhar as evoluções rápidas do setor
                de desenvolvimento.
              </p>

              <p className="font-medium">
                Quer seja em um site, aplicativo mobile ou outro produto
                digital, estou ansioso pela oportunidade de trazer minhas
                habilidades e paixão para seu próximo projeto.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Lucas Oliveira Véras"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  clientes satisfeitos
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projetos completos
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={7} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  meses de experiência
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
