import { motion } from "framer-motion";
import styled from "styled-components";
import breakpoints from "assets/styles/breakpoints";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`


export const HomeButton = styled(motion.button)`
  position: fixed;
  top: 16px;
  left: 16px;
  cursor: pointer;
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  transition: color .3s;
  
  &:hover {
    color: #ccc;
    transition: color .3s;
  }

  @media (min-width: ${breakpoints.$screenMinXs}) {
    top: 24px;
    left: 24px;
  }
`

