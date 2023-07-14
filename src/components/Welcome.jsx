import QuizBox from '../components/QuizBox'
import {useState} from 'react'


const Welcome = () => {

  const [show,setShow] = useState(false)

  const handleOnClick = () => {
    setShow(true)
  }

  return (
    <div>
      <h1 className='font-extrabold text-blue-900'>Welcome to CodeQuiz </h1>
      <p className='font-bold text-blue-900 py-2'>Learn react.js while having fun </p>
      {!show && <button className="text-white bg-slate-800 font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-green-300" onClick={handleOnClick}>Get Started Here</button>}
      {show && <QuizBox />}
    </div>

  )
}

export default Welcome