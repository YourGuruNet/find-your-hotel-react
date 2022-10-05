import React from "react";
import FavoriteIcon from "../../app/assets/svg/FavoriteIcon";
import styled from "styled-components";
import { motion } from "framer-motion";

const FavoriteButton = () => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <FavoriteButtonWrapper>
        <FavoriteIcon width={2.4} height={2.2} />
      </FavoriteButtonWrapper>
    </motion.div>
  );
};

export default FavoriteButton;

export const FavoriteButtonWrapper = styled.button`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  filter: drop-shadow(${({ theme }) => theme.shadow});
  border-radius: 10rem;
  border: none;
  width: 5rem;
  height: 5rem;
`;
