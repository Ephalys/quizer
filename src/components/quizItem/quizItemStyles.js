import styled from 'styled-components'
import { CategoryStyled } from 'components/category/categoryStyles'

export const StyledQuizItem = styled.div``

export const QuizItemTitle = styled.div``

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