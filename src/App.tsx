import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import QuizQuestion from './pages/QuizQuestion';

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/quiz/:quiz_id',
      element: <Quiz />,
    },
    {
      path: '/quiz/:quiz_id/:question_id',
      element: <QuizQuestion />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
