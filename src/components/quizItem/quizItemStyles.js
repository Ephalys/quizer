import breakpoints from "assets/styles/breakpoints";
import styled from 'styled-components'
import { motion } from "framer-motion";
import { CategoryStyled } from 'components/category/categoryStyles'

export const StyledQuizItem = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    @media (min-width: ${breakpoints.$screenMinXs}) {
        transform: translate(0,-25%);
    }
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
    background-color: #00b151;
    color: white;
    &:hover {
        background-color: #00b151;
        color: white;
    }
`

export const CategoryStyledAnswerBad = styled(CategoryStyledAnswer)`
    background-color: red;
    color: white;
    &:hover {
        background-color: red;
        color: white;
    }
`

export const QuizItemAnswers = styled(motion.div)`
    display: flex;
    flex-direction: column; 
    margin: 0 0 56px;
    min-width: 100%;
    @media (min-width: ${breakpoints.$screenMinXs}) {
        flex-direction: row;
        /* flex-wrap: wrap; */
        min-width: 80%;
        justify-content:center;
    }
`

export const QuizItemTitle = styled(motion.h1)`
  font-size: 20px;
  text-align: center;
  margin: 0 16px 40px;
`