import { motion, useMotionValue } from "framer-motion";

interface AnimatedCounterProps {
  amount: number;
  once?: boolean;
}

export default function AnimatedCounter({
  amount,
  once = false,
}: AnimatedCounterProps) {
  const number = useMotionValue(0);

  const counter = (amount: number) => {
    let count = 0;

    const updateCounter = () => {
      if (count <= amount) {
        number.set(count++);
        requestAnimationFrame(updateCounter);
      }
    };
    updateCounter();
  };

  return (
    <motion.span
      onViewportEnter={() => counter(amount)}
      viewport={{ once }}
      className="text-2xl font-light text-yellow-500 lg:text-xl"
    >
      {number}
    </motion.span>
  );
}
