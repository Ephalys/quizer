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
  @media (min-width: ${breakpoints.$screenMinXs}) {
      
  }
`

export const QuizCategory = styled(motion.span)`
  color:#000;
`

export const QuizRedirect = styled(motion.span)`
  cursor:pointer;
`