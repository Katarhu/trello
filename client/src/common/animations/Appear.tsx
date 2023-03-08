import { motion, useAnimation } from "framer-motion";
import { IWithChildrenProps } from "@types";
import { useEffect } from "react";

interface AppearProps extends IWithChildrenProps {
  delay?: number;
  key?: string;
  delayMax?: number;
  y?: string | number;
}

export const AppearAnimation = ({
  children,
  delay = 0.25,
  y = "250%",
  delayMax = 1,
}: AppearProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut", delay },
    });
  }, [controls, delay]);

  return (
    <motion.div
      initial={{ y, opacity: 0 }}
      exit={{
        y,
        opacity: 0,
        transition: { delay: delayMax - delay, duration: 0.4 },
      }}
      animate={controls}
      layout
    >
      {children}
    </motion.div>
  );
};
