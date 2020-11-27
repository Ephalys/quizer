import React from 'react'
import { StyledQuizItemType } from './quizItemTypeStyles'

const QuizItemType = props => {
    const { type } = props

    const typeMapping = {
        multiple: "Multichoice",
        boolean: "True of false"
    }

    return (
        <StyledQuizItemType>
            { typeMapping[type]}
        </StyledQuizItemType>
    )
}

export default QuizItemType