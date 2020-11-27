import React, { useState, useEffect, useRef } from 'react'
import { QuizItemTitle, StyledQuizItem, CategoryStyledAnswerGood, CategoryStyledAnswerBad, CategoryStyledAnswer } from './quizItemStyles'
import { CategoryStyled } from 'category/categoryStyles'
import QuizItemType from "components/quizItemType/quizItemType"
import shuffleArray from "utils/shuffleArray"

const QuizItem = props => {
    const handleTimeout = useRef(null)
    const { category, type, difficulty, question, correct_answer, incorrect_answers } = props.data
    const { setCurrentQuestionIndex, questionIndex, addNewAnswer } = props
    const [allAnswers, setAllAnswers] = useState(undefined)

    useEffect(() => {
        setAllAnswers(shuffleArray([...incorrect_answers, correct_answer]))
        return () => {
            clearTimeout(handleTimeout)
        }
    }, [incorrect_answers, correct_answer])

    const [goodAnswerIndex, setGoodAnswerIndex] = useState(undefined)
    const [userAnswerIndex, setUserAnswerIndex] = useState(undefined)

    const handleClick = index => {
        if (!userAnswerIndex) {
            setGoodAnswerIndex(allAnswers.indexOf(correct_answer))
            setUserAnswerIndex(index)
            addNewAnswer({
                question: props.data,
                userAnswer: allAnswers[index]
            })
            handleTimeout.current = setTimeout(() => {
                setCurrentQuestionIndex(questionIndex + 1)
                setUserAnswerIndex(undefined)
                setGoodAnswerIndex(undefined)
            }, 500)
        }
    }

    return (
        <StyledQuizItem>
            <h1>item</h1>
            {JSON.stringify(userAnswerIndex)}
            <QuizItemType type={type}></QuizItemType>
            <QuizItemTitle>{question}</QuizItemTitle>
            {allAnswers?.map((elem, index) => {
                if (goodAnswerIndex === index)
                    return <CategoryStyledAnswerGood key={index}>{elem}</CategoryStyledAnswerGood>
                if (userAnswerIndex === index)
                    return <CategoryStyledAnswerBad key={index}>{elem}</CategoryStyledAnswerBad>
                if (typeof userAnswerIndex !== "undefined")
                    return <CategoryStyledAnswer key={index}>{elem}</CategoryStyledAnswer>
                return <CategoryStyled onClick={() => handleClick(index)} key={index}>{elem}</CategoryStyled>
            })}
        </StyledQuizItem>
    )
}

export default QuizItem