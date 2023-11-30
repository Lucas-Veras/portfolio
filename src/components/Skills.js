import {
  backendSkills,
  frontendSkills,
  fullStack,
  otherSkill,
  skillData,
} from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const FramerImage = motion(Image);

const AnimatedSkills = ({ skills = [], animationDelay = 0.2 }) => {
  return (
    <div className="flex flex-row md:grid md:grid-cols-5 md:justify-items-center justify-around flex-wrap mt-4 gap-8 md:gap-4 items-center">
      {skills.map((skill, index) => (
        <FramerImage
          key={skill.skillName}
          title={skill.skillName}
          src={skill.Image}
          width={80}
          height={80}
          alt={skill.skillName}
          className="cursor-pointer w-20 xl:w-16 lg:w-12 md:w-full h-20 xl:h-16 lg:h-12 md:h-full md:max-h-[48px] object-contain"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: index * animationDelay,
            },
          }}
          whileHover={{ y: -5 }}
          priority
          viewport={{ once: true }}
        />
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <section className="my-64">
      <h2 className="font-bold text-8xl mt-64 mb-32 w-full text-center md:text-6xl md:mt-32 md:mb-16">
        Skills
      </h2>
      <div className="flex flex-col items-center justify-center gap-3 h-full overflow-hidden md:hidden">
        <AnimatedSkills skills={skillData} />
        <AnimatedSkills skills={frontendSkills} />
        <AnimatedSkills skills={backendSkills} />
        <AnimatedSkills skills={fullStack} />
        <AnimatedSkills skills={otherSkill} />
      </div>
      <div className="hidden md:block mx-auto">
        <AnimatedSkills
          animationDelay={0.1}
          skills={[
            ...skillData,
            ...frontendSkills,
            ...backendSkills,
            ...fullStack,
            ...otherSkill,
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
