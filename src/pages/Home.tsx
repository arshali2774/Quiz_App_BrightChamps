import { Link } from 'react-router-dom';
import { quiz } from '../db/quiz';
import { Quiz } from '../db/quiz';
const Home = () => {
  return (
    <div className='py-8 px-8 flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10 h-screen xl:max-w-[1500px] xl:mx-auto'>
      <div className='lg:w-[40%]'>
        <h1 className='text-3xl text-center lg:text-left lg:text-4xl xl:text-5xl font-bold text-primary '>
          Welcome, to BrightChamps Quiz App!
        </h1>
        <p className='text-center text-xl lg:text-left lg:text-lg xl:text-2xl text-secondary mt-4 '>
          We have different trivia topics for you to quiz on. Please select your
          topic and start your quiz.
        </p>
      </div>
      <div className='divider sm:divider-vertical sm:mx-auto sm:w-[40%] lg:w-auto lg:mx-0 lg:divider-horizontal lg:my-auto lg:h-[40%] xl:h-[25%]'></div>
      <div className='flex flex-wrap gap-4 mt-4'>
        {quiz.map((quiz: Quiz) => (
          <Link
            to={`/quiz/${quiz.quiz_id}`}
            key={quiz.quiz_id}
            className='btn btn-accent btn-outline btn-md'
          >
            <p className='xl:text-lg'>{quiz.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;
