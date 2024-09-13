import { Link, useParams } from 'react-router-dom';
import { quiz } from '../db/quiz';
import { Quiz as QuizType } from '../db/quiz';
const Quiz = () => {
  const { quiz_id } = useParams<{ quiz_id: string }>();
  const quizData: QuizType | undefined = quiz.find(
    (quiz) => quiz.quiz_id === Number(quiz_id)
  );

  return (
    <div className='py-8 px-8 flex justify-center items-center gap-10 h-screen xl:max-w-[1500px] xl:mx-auto'>
      <div className='border-2 border-primary rounded-lg p-4 flex flex-col gap-4 lg:w-[60%]'>
        <h1 className='lg:text-4xl font-bold text-primary text-center'>
          {quizData?.name}
        </h1>
        <p className='lg:text-lg text-center w-[60%] mx-auto'>
          This quiz will check your knowledge on {quizData?.name}. If you are
          ready press the button below to start the quiz.
        </p>
        <Link
          to={`/quiz/${quiz_id}/1`}
          className='btn btn-secondary text-secondary-content btn-md w-[20%] mx-auto mt-10'
        >
          Start
        </Link>
      </div>
    </div>
  );
};
export default Quiz;
