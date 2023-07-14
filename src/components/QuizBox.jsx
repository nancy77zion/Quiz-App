import { useState } from 'react';


const QuizBox = () => {

  const questions = [
    {
      questionText: 'JSX stands for ?',
      answerOptions: [
        { answerText: 'Javascript Extension', isCorrect: false },
        { answerText: 'Javascript', isCorrect: false },
        { answerText: 'Javascript XML', isCorrect: true },
        { answerText: 'None of these', isCorrect: false },
      ],
    },
    {
      questionText: 'What is React ?',
      answerOptions: [
        { answerText: 'a css framework', isCorrect: false },
        { answerText: 'a javascript Library', isCorrect: true },
        { answerText: 'a javascript framework', isCorrect: false },
        { answerText: 'a PHP Library', isCorrect: false },
      ],
    },
    {
      questionText: 'what is the purpose of React state ?',
      answerOptions: [
        { answerText: 'to store function', isCorrect: false },
        { answerText: 'to store dynamic data', isCorrect: true },
        { answerText: 'to store static data', isCorrect: false },
        { answerText: 'to store styles', isCorrect: false },
      ],
    },
    {
      questionText: 'What is React component ?',
      answerOptions: [
        { answerText: 'HTML document', isCorrect: false },
        { answerText: 'a HTML element', isCorrect: false },
        { answerText: 'a CSS stylesheet', isCorrect: false },
        { answerText: 'a javascript function', isCorrect: true },
      ],
    },
    {
      questionText: 'React.js is written in which language ?',
      answerOptions: [
        { answerText: 'JAVA', isCorrect: false },
        { answerText: 'PHP', isCorrect: false },
        { answerText: 'PYTHON', isCorrect: false },
        { answerText: 'JAVASCRIPT', isCorrect: true },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 2);
    }

    const nextQuetions = currentQuestion + 1;
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <>
    <div className='p-4 bg-blue-900 bg-opacity-75 '>
      <div className='flex justify-between'>
        <h1 className='pr-8  text-xl text-center mb-3 font-bold tracking-wider'>React.js Quiz</h1>
        <p className='mt-1'>Score: {score} / 10</p>
      </div>
      
      <div className="bg-slate-500">
        {showScore ? (
          <div className='p-28 bg-blue-900 bg-opacity-75 '>
            <p className='text-xl text-center mb-3 font-bold'>Thanks for playing</p>
            <p>You scored a total of {score} points.</p>
          </div>
        )
          :
          (
            <>
              <div className='flex px-1 py-2'>
                <div className='px-3'>
                  <span>Question</span> {currentQuestion + 1}:
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                <ul>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions,index) => (
                    <li key={index} className='container text-center bg-green-300 my-2 py-3 '>
                    <button className="text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-slate-700" onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                    </li>
                  ))
                }
                </ul>
              </div>
            </>
          )}
      </div>
    </div>
    </>
  )
}

export default QuizBox