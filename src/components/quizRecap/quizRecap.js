import React, { useState, useEffect } from 'react'
import { QuizRecapTitle, StyledQuizRecap, QuizRecapContainer, QuizRecapScore, QuizRecapCongrats } from "./quizRecapStyles"
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { updateScore } from 'actions/score';

const QuizRecap = props => {
    const history = useHistory()
    const { category, questCount, goodAnswerCount } = props.data
    const [congrats, setCongrats] = useState()
    const dispatch = useDispatch();

    const handleRedirectHome = () => {
        history.push("/")
    }

    useEffect(() => {
        let tempCongrats;
        if (0 <= goodAnswerCount <= 3) {
            tempCongrats = "Unlucky !"
        } else if (4 <= goodAnswerCount <= 6) {
            tempCongrats = "Keep goin' !"
        } else if (7 <= goodAnswerCount <= 9) {
            tempCongrats = "Nice !"
        } else if (goodAnswerCount === 10) {
            tempCongrats = "Incredible !"
        }
        setCongrats(tempCongrats)
    }, [goodAnswerCount])

    useEffect(() => {
    }, [dispatch, goodAnswerCount, category])

    return (
        <StyledQuizRecap initial="hidden" animate="visible" exit="hidden" variants={{
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1
            }
        }}>
            <QuizRecapTitle onClick={handleRedirectHome}>Quizer</QuizRecapTitle>
            <QuizRecapContainer>
                <QuizRecapScore>{goodAnswerCount} / {questCount}</QuizRecapScore>
                <QuizRecapCongrats>{congrats}</QuizRecapCongrats>
            </QuizRecapContainer>
        </StyledQuizRecap>
    )
}

export default QuizRecap