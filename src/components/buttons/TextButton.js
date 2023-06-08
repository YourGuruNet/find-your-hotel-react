import React from "react";
import { motion } from "framer-motion";

const TextButton = (props) => {
  const { child } = props;
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {child}
    </motion.div>
  );
};

export default TextButton;
