import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { StyledQuiz, QuizTitle, QuizCategory } from "./quizStyles"
import QuizItem from 'components/quizItem/quizItem'
import QuizRecap from "components/quizRecap/quizRecap"
import { getQuestionsByParams } from 'config/api'
import { useParams } from "react-router-dom";
import history from 'config/history'
import Loader from 'components/loader/loader';

export const Quiz = () => {
    if (localStorage.getItem("username") === null) {
        history.push('/login')
    }
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
            {currentQuestion && !isQuizFinished && category.category && <>
                <QuizTitle >Quizer <QuizCategory> / {category?.category?.name}</QuizCategory></QuizTitle>
                <QuizItem
                    questionIndex={currentQuestionIndex}
                    key={currentQuestionIndex}
                    data={currentQuestion}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                    addNewAnswer={addNewAnswer}
                />
            </>}
            {!category.category &&
                <Redirect to="/" />
            }
            {isQuizFinished && <QuizRecap data={allUserAnswers} />
            }
        </StyledQuiz>
    )
}

export default Quiz