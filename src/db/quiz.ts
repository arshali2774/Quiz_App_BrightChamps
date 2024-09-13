// defining shape of each quiz question
export interface QuizQuestion {
  question_id: number;
  question: string;
  options: string[];
  answer: string;
}

// defining shape of each quiz
export interface Quiz {
  quiz_id: number;
  name: string;
  topic: QuizQuestion[];
}

// random quiz questions on countries capitals
const countryCapitals: QuizQuestion[] = [
  {
    question_id: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'Marseille', 'Lyon', 'Toulouse'],
    answer: 'Paris',
  },
  {
    question_id: 2,
    question: 'What is the capital of Germany?',
    options: ['Berlin', 'Munich', 'Hamburg', 'Cologne'],
    answer: 'Berlin',
  },
  {
    question_id: 3,
    question: 'What is the capital of Italy?',
    options: ['Rome', 'Milan', 'Naples', 'Turin'],
    answer: 'Rome',
  },
  {
    question_id: 4,
    question: 'What is the capital of Spain?',
    options: ['Madrid', 'Barcelona', 'Valencia', 'Seville'],
    answer: 'Madrid',
  },
  {
    question_id: 5,
    question: 'What is the capital of the United States?',
    options: ['Washington D.C.', 'New York City', 'Los Angeles', 'Chicago'],
    answer: 'Washington D.C.',
  },
  {
    question_id: 6,
    question: 'What is the capital of Japan?',
    options: ['Tokyo', 'Osaka', 'Nagoya', 'Sapporo'],
    answer: 'Tokyo',
  },
  {
    question_id: 7,
    question: 'What is the capital of China?',
    options: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'],
    answer: 'Beijing',
  },
  {
    question_id: 8,
    question: 'What is the capital of Canada?',
    options: ['Ottawa', 'Toronto', 'Montreal', 'Vancouver'],
    answer: 'Ottawa',
  },
];

// random quiz questions on harry potter
const harryPotter: QuizQuestion[] = [
  {
    question_id: 1,
    question: 'Who is the main character in the Harry Potter series?',
    options: [
      'Harry Potter',
      'Ron Weasley',
      'Hermione Granger',
      'Neville Longbottom',
    ],
    answer: 'Harry Potter',
  },
  {
    question_id: 2,
    question: 'Who is the main villain in the Harry Potter series?',
    options: ['Voldemort', 'Snape', 'Dumbledore', 'Harry Potter'],
    answer: 'Voldemort',
  },
  {
    question_id: 3,
    question: 'How many houses are there in Hogwarts?',
    options: ['4', '5', '6', '7'],
    answer: '4',
  },
  {
    question_id: 4,
    question: 'What is the name of the school in the Harry Potter series?',
    options: ['Hogwarts', 'Hogsmeade', 'Gringotts', 'Hufflepuff'],
    answer: 'Hogwarts',
  },
  {
    question_id: 5,
    question: 'What is the name of the boy who annoys everyone?',
    options: ['Harry Potter', 'Ron Weasley', 'Hermione Granger', 'Malfoy'],
    answer: 'Malfoy',
  },
];

const quiz: Quiz[] = [
  {
    quiz_id: 1,
    name: 'Country Capitals',
    topic: countryCapitals,
  },
  {
    quiz_id: 2,
    name: 'Harry Potter',
    topic: harryPotter,
  },
];

export { quiz };
