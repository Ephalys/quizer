import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { StyledQuiz } from "./quizStyles"
import QuizItem from 'components/quizItem/quizItem'
import QuizRecap from "components/quizRecap/quizRecap"
import { getQuestionsByParams } from 'config/api'
import { useParams } from "react-router-dom";
import Loader from 'components/loader/loader';

export const Quiz = () => {
    const { categoryId } = useParams()
    const category = useSelector(state => state.category)
    const [quiz, setQuiz] = useState({})
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(undefined)
    const [allUserAnswers, setAllUserAnswers] = useState([])
    const [isQuizFinished, setIsQuizFinished] = useState(false)

    useEffect(() => {
        const initQuiz = async () => {
            setQuiz(await getQuestionsByParams({
                categoryId,
            }))
        }
        initQuiz()
    }, [categoryId])

    useEffect(() => {
        if (quiz.data?.results.length) {
            if (currentQuestionIndex < quiz.data?.results.length)
                setCurrentQuestion(quiz.data?.results[currentQuestionIndex])
            else
                setIsQuizFinished(true)
        }
    }, [currentQuestionIndex, quiz])

    const addNewAnswer = answer => {
        setAllUserAnswers([...allUserAnswers, answer])
    }

    return (
        <StyledQuiz>
            {!currentQuestion && !isQuizFinished && <Loader />}
            {currentQuestion && !isQuizFinished && <>
                <QuizItem
                    questionIndex={currentQuestionIndex}
                    key={currentQuestionIndex}
                    data={currentQuestion}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                    addNewAnswer={addNewAnswer}
                />
            </>}
            {isQuizFinished && <QuizRecap data={allUserAnswers} />
            }
        </StyledQuiz>
    )
}

export default Quiz