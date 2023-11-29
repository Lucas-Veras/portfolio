import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
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
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Educação
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark md:w-[2px] md:left-[30px] xs:left-[20px] dark:shadow-3xl"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type={"Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)"}
            time={"06/2021 - Até o momento"}
            place={
              "IFRN (Campus Natal - Central) | Período: 6º | I.R.A.: 91,32"
            }
            info={`Forma profissionais que analisam, projetam, documentam, especificam, testam, implantam e mantém sistemas computacionais de informação. Este profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas.`}
          />

          <Details
            type={"Ensimo Médio (EM)"}
            time={"2018-2020"}
            place={"CLQ Premedicina | Parnaíba-PI"}
            info={
              "Parte do meu ensino médio fiz numa escola chamada CEC (1º e 2º ano), porém ela acabou fechando e eu tive que trocar de escola para concluir o 3º ano. Foi quando eu fui para o CLQ Premedicina, onde conclui o ensino médio."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
