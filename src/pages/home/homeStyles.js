import { motion } from "framer-motion";
import styled from "styled-components";
import breakpoints from "../../assets/styles/breakpoints";

export const Container = styled.div`
  width: 100vw;
`

export const Titleh1 = styled(motion.h1)`
  font-size: 20px;
  text-align: center;
  padding: 24px 16px;
`

export const CategoryWrapper = styled(motion.div)`
  padding: 0px 16px;
  display: flex;
  flex-direction: column; 
  @media (min-width: ${breakpoints.$screenMinXs}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`

export const Titleh2 = styled(motion.h2)`
  font-size: 18px;
  text-align: center;
  padding: 24px 16px;
`
export const Form = styled(motion.form)`
  display: flex;
  justify-content: center;
`