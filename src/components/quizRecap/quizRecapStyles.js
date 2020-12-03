import { motion } from 'framer-motion';
import styled from 'styled-components';
import { breakpoints } from 'assets/styles/breakpoints';

export const StyledQuizRecap = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items:center;
    height: 100%;
`
export const QuizRecapTitle = styled(motion.h2)`
    cursor: pointer;
`

export const QuizRecapContainer = styled(motion.div)`
    text-align: center;
    margin: auto;
    transform: translate(0, -25%);
`

export const QuizRecapScore = styled(motion.h1)`
    font-size: 12vh;
    margin-bottom: 0px;
`

export const QuizRecapCongrats = styled(motion.h2)`
`
