import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SimpleButton = (props) => {
  const { title, onClick } = props;
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button onClick={() => onClick()}>{title}</Button>
    </motion.div>
  );
};

export default SimpleButton;

const Button = styled.button`
  min-width: 40rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  background-color: ${({ theme }) => theme.lightBackground};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;
  color: ${({ theme }) => theme.secondaryText};
  height: 4rem;
  border: none;
  position: relative;
  z-index: 4;
`;
