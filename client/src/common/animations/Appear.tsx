import { motion } from "framer-motion";
import { IWithChildrenProps } from "@types";

type AppearProps = IWithChildrenProps;

export const Appear = ({ children }: AppearProps) => {
  return (
    <motion.div
      initial={{ y: "-50%", opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-50", opacity: 0.5 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
