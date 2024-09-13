import { useNavigate, useParams } from 'react-router-dom';
import { quiz } from '../db/quiz';
import { ChangeEvent, useEffect, useState } from 'react';
import { Quiz } from '../db/quiz';
const QuizQuestion = () => {
  //getting question and quiz id from url
  const { quiz_id, question_id } = useParams<{
    quiz_id: string;
    question_id: string;
  }>();
  // getting quiz data from db
  const quizData: Quiz | undefined = quiz.find(
    (quiz) => quiz.quiz_id === Number(quiz_id)
  );
  // is the current question first
  const [isFirstQuestion, setIsFirstQuestion] = useState<boolean>(true);
  // is the current question last
  const [isLastQuestion, setIsLastQuestion] = useState<boolean>(false);
  // points earned by the user
  const [points, setPoints] = useState<number>(0);
  // questions answered by the user
  const [answeredQuestions, setAnsweredQuestions] = useState<
    { id: number; answer: string }[]
  >([]);
  // navigate to the next question
  const navigate = useNavigate();
  // point calculation logic
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // get selected answer
    const selectedAnswer = e.target.value;
    // create an object with question id and answer
    const answer = {
      id: Number(question_id),
      answer: selectedAnswer,
    };
    setAnsweredQuestions((prev) => {
      // Check if the question with the given id already exists
      const questionExists = prev.some((question) => question.id === answer.id);

      if (questionExists) {
        // Update the answer for the existing question
        return prev.map((question) =>
          question.id === answer.id ? answer : question
        );
      } else {
        // Add the new question with the answer
        return [...prev, answer];
      }
    });
    // get correct answer from quiz data
    const correctAnswer = quizData?.topic[Number(question_id) - 1].answer;
    // is the question already answered
    const isQuestionAnswered = answeredQuestions.some(
      (question) => question.id === Number(question_id)
    );
    // is the answer changed in already answered question
    const isPrevAnswerChanged = answeredQuestions.some(
      (question) =>
        question.id === Number(question_id) &&
        question.answer !== selectedAnswer
    );
    // if the answer is correct
    if (selectedAnswer === correctAnswer) {
      setPoints((prev) => prev + 1);
    } else {
      // if question id is different and answer is changed.
      if (isQuestionAnswered && isPrevAnswerChanged) {
        setPoints((prev) => Math.max(prev - 1, 0));
        return;
      }
    }
  };

  useEffect(() => {
    // Check if it's the first question
    if (Number(question_id) !== 1) {
      setIsFirstQuestion(false);
    } else {
      setIsFirstQuestion(true);
    }
    /// Check if it's the last question
    if (Number(question_id) === quizData?.topic.length) {
      setIsLastQuestion(true);
    } else {
      setIsLastQuestion(false);
    }
  }, [question_id, quizData?.topic.length]);
  // navigate to the next question
  const handleNext = () => {
    const currentQuestion = Number(question_id);
    navigate(`/quiz/${quiz_id}/${currentQuestion + 1}`);
  };
  // navigate to the previous question
  const handleBack = () => {
    const currentQuestion = Number(question_id);
    navigate(`/quiz/${quiz_id}/${currentQuestion - 1}`);
  };
  // navigate to the result page
  const handleResult = () => {
    navigate(`/quiz/${quiz_id}/result`);
  };
  // navigate to the first question
  const handleTryAgain = () => {
    setPoints(0);
    navigate(`/quiz/${quiz_id}/1`);
    setAnsweredQuestions([]);
  };
  // navigate to the home page
  const handleNewQuiz = () => {
    setPoints(0);
    navigate(`/`);
    setAnsweredQuestions([]);
  };
  return (
    <div className='py-8 px-8 flex justify-center items-center gap-10 h-screen xl:max-w-[1500px] xl:mx-auto'>
      <div className='border-2 border-primary rounded-lg p-4 flex flex-col gap-4 lg:w-[60%]'>
        {question_id === 'result' ? (
          <div>
            <h1 className='lg:text-2xl font-bold text-primary text-center'>
              Your Score
            </h1>
            <p className='text-center mt-4 lg:text-2xl'>
              <span className='font-bold'>{points}</span> /{' '}
              {quizData?.topic.length}
            </p>
            <div className='flex gap-8 justify-center items-center mt-8'>
              <button
                onClick={handleTryAgain}
                className='btn btn-accent btn-outline'
              >
                Try Again
              </button>
              <button
                className='btn btn-secondary btn-outline'
                onClick={handleNewQuiz}
              >
                New Quiz
              </button>
            </div>
          </div>
        ) : (
          <div>
            {' '}
            <h1 className='lg:text-xl font-bold text-primary text-center'>
              {quizData?.topic[Number(question_id) - 1].question}
            </h1>
            {/* multiple choice question */}
            <div className='grid grid-cols-2 gap-8 lg:w-[40%] mx-auto my-8'>
              {
                // show options
                quizData?.topic[Number(question_id) - 1].options.map(
                  (option) => (
                    <div key={option} className='flex gap-2 items-center '>
                      <input
                        type='radio'
                        name='answer'
                        value={option}
                        className='radio radio-secondary'
                        onChange={handleChange}
                        checked={answeredQuestions.some(
                          (question) =>
                            question.id === Number(question_id) && // check for correct question ID
                            question.answer === option // check if the answer matches the current option
                        )}
                      />
                      <label>{option}</label>
                    </div>
                  )
                )
              }
            </div>
            <div className=' flex justify-center items-center gap-8'>
              {!isFirstQuestion && (
                <button
                  className='btn btn-accent btn-outline btn-md lg:w-[20%]'
                  onClick={handleBack}
                >
                  Back
                </button>
              )}
              {!isLastQuestion ? (
                <button
                  className='btn btn-accent btn-outline btn-md lg:w-[20%]'
                  onClick={handleNext}
                >
                  Next
                </button>
              ) : (
                <button
                  className='btn btn-accent btn-md lg:w-[20%]'
                  onClick={handleResult}
                >
                  Result
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default QuizQuestion;
