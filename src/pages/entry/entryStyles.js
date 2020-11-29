import { motion } from "framer-motion";
import styled from "styled-components";
import breakpoints from "assets/styles/breakpoints";

export const EntryWrapper = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding: 16px;
    
    @media (min-width: ${breakpoints.$screenMinXs}) {
      padding: 24px;
    }
`

export const EntryTitle = styled(motion.h1)`
  margin: 0 0 24px;
`

export const BlackSpan = styled.span`
  color: black;
`
export const EntrySubtitle = styled(motion.p)`
  font-size: 20px;
  margin: 0 0 40px;
`
