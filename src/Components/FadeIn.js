import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
};

function FadeIn(props) {
  const { children } = props;
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: 'easeIn' , duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
