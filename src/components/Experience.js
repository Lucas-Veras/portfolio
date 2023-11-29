import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experiência
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[32px] top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[25px] xs:left-[15px] dark:bg-primaryDark dark:shadow-3xl"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={"Desenvolvedor Front-end (Freelancer)"}
            companyLink={"https://app.orcacasafacil.com.br/"}
            company={"OrçaCasaFácil"}
            time={"09/2023 - Até o momento"}
            address={"Natal, RN | Remoto"}
            work={
              <>
                <span className="block">
                  - Participou da implementação e construção de design da
                  plataforma OrçaCasaFácil, feita para criação de orçamentos de
                  contrução em geral mas com foco no programa Minha Casa, Minha
                  Vida
                </span>
                <span className="block">
                  - Utilizou as seguintes tecnologias: React, javascript,
                  chackra-ui, redux-toolkit, react-hook-form, yup e outros
                </span>
              </>
            }
          />

          <Details
            position={"Desenvolvedor Front-end (Freelancer)"}
            companyLink={"https://extraconomy.com/"}
            company={"Extraconomy"}
            time={"04/2023 - Até o momento"}
            address={"Roma, IT | Remoto"}
            work={
              <>
                <span className="block">
                  - Participou da implementação do marketplace italiano
                  Extraconomy
                </span>
                <span className="block">
                  - Utilizou as seguintes tecnologias: React, javascript,
                  primeReact, primeFlex, cloudinary, react-paypal e outros
                </span>
              </>
            }
          />

          <Details
            position={"Desenvolvedor Mobile e Web Front-End (Estágio)"}
            companyLink={
              "https://www.linkedin.com/company/governo-do-estado-do-rio-grande-do-norte/mycompany/"
            }
            company={"SETHAS"}
            time={"04/2023 - Até o momento"}
            address={"Natal, RN | Remoto"}
            work={
              <>
                <span className="block">
                  - Atuou sozinho na versão 2.0 do aplicativo mobile Programa do
                  leite Potiguar (PLP)
                </span>
                <span className="block">
                  - Implementou novas funcionalidades no projeto mobile e nos
                  projetos web (PLP)
                </span>
                <span className="block">
                  - Atuou como tutor e fez code review dos projetos web PLP
                </span>
                <span>
                  - Utilizou as seguintes tecnologias: React-Native CLI,
                  TypeScript, Redux, async-storage, reanimated, axios e outros
                </span>
              </>
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
