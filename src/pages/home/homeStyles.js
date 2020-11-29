import { motion } from "framer-motion";
import styled from "styled-components";
import breakpoints from "assets/styles/breakpoints";

export const Container = styled(motion.div)`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const Titleh1 = styled(motion.h1)`
  font-size: 20px;
  text-align: center;
  margin: 56px 0 40px;
`

export const CategoryWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column; 
  margin: 0 16px 56px;
  min-width: 100%;
  @media (min-width: ${breakpoints.$screenMinXs}) {
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 80%;
  }
`

export const Titleh2 = styled(motion.h2)`
  font-size: 18px;
  text-align: center;
  margin: 0 0 32px;
`
export const Form = styled(motion.form)`
  display: flex;
  justify-content: center;
`

export const CategorySearchWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column; 
  margin: 32px 16px 56px;
  min-width: 100%;
  @media (min-width: ${breakpoints.$screenMinXs}) {
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 80%;
  }
`