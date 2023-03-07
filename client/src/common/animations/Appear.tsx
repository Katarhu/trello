import { motion } from "framer-motion";
import { IWithChildrenProps } from "@types";

interface AppearProps extends IWithChildrenProps {
  delay?: number;
  key?: string;
  delayMax?: number;
  y?: string | number;
}

export const AppearAnimation = ({
  children,
  delay = 0.25,
  key,
  y = "250%",
  delayMax = 1,
}: AppearProps) => {
  return (
    <motion.div
      key={key}
      initial={{ y, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y, opacity: 0, transition: { delay: delayMax - delay, duration: 0.4 } }}
      transition={{ duration: 0.4, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
};
