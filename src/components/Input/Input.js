import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Input = (props) => {
  const { placeholder, onChange, value } = props;
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <InputField value={value} placeholder={placeholder} onChange={onChange} />
    </motion.div>
  );
};

export default Input;

const InputField = styled.input`
  min-width: 40rem;
  height: 5rem;
  background: ${({ theme }) => theme.lightBackground};
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  font-size: 1.5rem;
  border-radius: 10px;
  padding: 1rem;
  outline: none;
  border: 0;
  outline: 0;
  position: relative;
  z-index: 4;
  ::placeholder {
    color: ${({ theme }) => theme.secondaryText};
    opacity: 1;
  }
`;
