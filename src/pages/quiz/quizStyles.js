import styled from 'styled-components';
import { motion } from 'framer-motion';
import breakpoints from 'assets/styles/breakpoints';

export const StyledQuiz = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const QuizTitle = styled(motion.h3)`
    font-size: 16px;
    line-height: 26px;
    @media (min-width: ${breakpoints.$screenMinXs}) {
      font-size: 20px;
      line-height: 24px;
    }
`

export const QuizCategory = styled(motion.span)`
  color:#000;
`

export const QuizRedirect = styled(motion.span)`
  cursor:pointer;
`