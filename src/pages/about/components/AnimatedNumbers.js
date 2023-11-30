import useAnimateNumbers from "@/hooks/useAnimateNumbers";

const AnimatedNumbers = ({ value }) => {
  const { ref } = useAnimateNumbers({ value });

  return <span ref={ref}></span>;
};

export default AnimatedNumbers;
