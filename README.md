# Quiz Application

This project is a Quiz Application built with React and TypeScript, designed as part of an assignment for BrightChamps. The application allows users to attempt multiple-choice quizzes, track their score, and see their result at the end of the quiz. The project has been deployed on Netlify and can be run locally for development purposes.

## Features

- Users can navigate through a set of quiz questions.
- Multiple-choice answers are provided, and users can select an option.
- The app keeps track of the user’s progress and score as they answer questions.
- The final result is displayed with the total score at the end of the quiz.
- The user can retake the quiz or start a new quiz.
- Points are awarded or deducted based on the correct or incorrect answers.

## How Points Are Calculated

- **Correct Answer:** 1 point is awarded for each correct answer.
- **Incorrect Answer:** 1 point is deducted for each wrong answer (with a minimum score of 0 points).
- **No Negative Scores:** If a user answers a question incorrectly, the score is not deducted.

> [!NOTE]
>
> - If a user answers a **fresh** question correctly, the score is increased by 1 point.
> - If a user answers a **fresh** question incorrectly, the score is not deducted.
> - If a user changes their answer from correctly answered to incorrectly answered, the score is deducted.
> - If a user changes their answer from incorrectly answered to correctly answered, the score increases by 1 point.
> - If a user changes their answer from incorrectly answered to incorrectly answered, the score is not deducted.

## Project Demo

The project has been deployed on Netlify. You can see the live version of the quiz app by clicking the link below:

[Deployed Quiz Application](https://quiz-brightchamps.netlify.app/)

## Getting Started (Run Locally)

Follow these steps to set up the project locally on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/arshali2774/Quiz_App_BrightChamps.git
```

2. Navigate to the project directory:

```bash
cd Quiz_App_BrightChamps
```

3. Install dependencies:

```bash
npm install
```

### Running the App

1. Start the development server:

```bash
npm run dev
```

2. Open the application in the browser:
   By default, the app will be running at http://localhost:5173. Open your browser and navigate to this URL to see the app in action.

## Contact

Thank you for reviewing the project! Let me know if you have any questions.

- [Email](mailto:arshaliwork@gmail.com)
