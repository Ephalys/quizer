import breakpoints from "assets/styles/breakpoints";
import styled from 'styled-components'
import { motion } from "framer-motion";
import { CategoryStyled } from 'components/category/categoryStyles'

export const StyledQuizItem = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CategoryStyledAnswer = styled(CategoryStyled)`
    &:hover {
        outline: none;
        border: 2px solid transparent;
        background-color: white;
        color: black;
        cursor: unset;
    }
`

export const CategoryStyledAnswerGood = styled(CategoryStyledAnswer)`
    color: green;
    &:hover {
        color: green;
    }
`

export const CategoryStyledAnswerBad = styled(CategoryStyledAnswer)`
    color: red;
    &:hover {
        color: red;
    }
`

export const QuizItemAnswers = styled(motion.div)`
    display: flex;
    flex-direction: column; 
    margin: 0 0 56px;
    min-width: 100%;
    @media (min-width: ${breakpoints.$screenMinXs}) {
        flex-direction: row;
        flex-wrap: wrap;
        min-width: 80%;
    }
`

export const QuizItemTitle = styled(motion.h1)`
  font-size: 20px;
  text-align: center;
  margin: 0 16px 40px;
`