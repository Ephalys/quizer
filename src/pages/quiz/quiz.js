import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import history from "config/history";
import {
  StyledQuiz,
  QuizTitle,
  QuizCategory,
  QuizRedirect,
} from "./quizStyles";
import QuizItem from "components/quizItem/quizItem";
import QuizRecap from "components/quizRecap/quizRecap";
import { getQuestionsByParams } from "config/api";
import { useParams } from "react-router-dom";
import Loader from "components/loader/loader";

export const Quiz = () => {
  if (localStorage.getItem("username") === null) {
    history.push("/login");
  }
  const { categoryId } = useParams();
  const category = useSelector((state) => state.category);
  const [quiz, setQuiz] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(undefined);
  const [result, setResult] = useState();
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  useEffect(() => {
    const initQuiz = async () => {
      setQuiz(
        await getQuestionsByParams({
          categoryId,
        })
      );
    };
    initQuiz();
  }, [categoryId]);

  useEffect(() => {
    if (quiz.data?.results.length) {
      if (currentQuestionIndex < quiz.data?.results.length)
        setCurrentQuestion(quiz.data?.results[currentQuestionIndex]);
      else setIsQuizFinished(true);
    }
  }, [currentQuestionIndex, quiz]);

  useEffect(() => {
    if (quiz.data?.results.length) {
      setResult({
        category: category.category?.name,
        questCount: quiz.data.results.length,
        goodAnswerCount: 0,
      });
    }
  }, [quiz, category]);

  const handleSetResult = (isUserAnswerCorrect) => {
    if (isUserAnswerCorrect) {
      const newResult = {
        ...result,
        goodAnswerCount: result.goodAnswerCount + 1,
      };
      setResult(newResult);
    }
  };

  const handleRedirectHome = () => {
    history.push("/");
  };

  return (
    <StyledQuiz exit="hidden">
      {!currentQuestion && !isQuizFinished && <Loader />}
      {currentQuestion && !isQuizFinished && category.category && (
        <>
          <QuizTitle>
            <QuizRedirect onClick={handleRedirectHome}>Quizer</QuizRedirect>
            <QuizCategory> / {category?.category?.name}</QuizCategory>
          </QuizTitle>
          <QuizItem
            questionIndex={currentQuestionIndex}
            key={currentQuestionIndex}
            data={currentQuestion}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            handleSetResult={handleSetResult}
          />
        </>
      )}
      {!category.category && <Redirect to="/" />}
      {isQuizFinished && <QuizRecap data={result} />}
    </StyledQuiz>
  );
};

export default Quiz;
