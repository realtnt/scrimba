import './App.css';
import Question from './Question'
import GameSettings from './GameSettings';
import React from 'react';
import { nanoid } from 'nanoid'
import triviaCategories from './categories';


function App() {
  const pageSize = 5

  const [allQuestionData, setAllQuestionData] = React.useState([])
  const [gameStarted, setGameStarted] = React.useState(false)
  const [roundFinished, setRoundFinished] = React.useState(false)
  const [reset, setReset] = React.useState(0)
  const [points, setPoints] = React.useState(0)
  const [categories, setCategories] = React.useState(triviaCategories)
  const [url, setUrl] = React.useState('https://opentdb.com/api.php?amount=5')
  const [noOfQuestions, setNoOfQuestions] = React.useState(pageSize)
  const [currentQuestion, setCurrentQuestion] = React.useState(0)

  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setAllQuestionData(
          data.results.map(question => {
            let shuffledAnswers = shuffleAnswers([...question.incorrect_answers, question.correct_answer])
            return ({
              id: nanoid(),
              question: question.question,
              shuffled_answers: shuffledAnswers.map(answer => ({
                id: nanoid(),
                answerText: answer,
                isCorrect: answer === question.correct_answer ? true : false,
                isSelected: false
              }))
            })
          })
        )
      })
  }, [url, reset])


  React.useEffect(() => {
    setUrl(() => {
      let oldUrl = 'https://opentdb.com/api.php?amount=' + noOfQuestions
      for (let cat of categories) {
        if (cat.isSelected) {
          oldUrl += '&category=' + cat.cat_no
        }
      }
      return oldUrl
    })
  }, [noOfQuestions, categories])


  function shuffleAnswers(answersArray) {
    let shuffledAnswers = []
    while (answersArray.length > 0) {
      const rndNumber = Math.floor(Math.random() * answersArray.length)
      shuffledAnswers = shuffledAnswers.concat(answersArray.splice(rndNumber, 1))
    }
    return shuffledAnswers
  }


  function checkAnswers() {
    setRoundFinished(true)
    let points = 0
    for (let question of allQuestionData.slice(currentQuestion, currentQuestion + pageSize)) {
      for (let answer of question.shuffled_answers)
        if (answer.isCorrect && answer.isSelected) {
          points++
        }
    }
    setPoints(oldPoints => oldPoints + points)
  }

  function handleAnswerClicks(questionId, answerId) {
    if (roundFinished) {
      return
    }
    setAllQuestionData(oldData => {
      let answers = oldData.find(question => question.id === questionId).shuffled_answers
      answers.map(answer => answer.isSelected = false)
      answers.find(answer => answer.id === answerId).isSelected = true
      return [...oldData]
    })
  }


  function handleCategoryClicks(catId) {
    setCategories(oldData => oldData.map(category => ({
      ...category,
      isSelected: category.id === catId ? !category.isSelected : category.isSelected
    })))
  }


  function nextQuestions() {
    setRoundFinished(false)
    setCurrentQuestion(oldCurrentQuestion => oldCurrentQuestion + pageSize)
  }

  function restartGame() {
    setPoints(0)
    setCurrentQuestion(0)
    setAllQuestionData([])
    setRoundFinished(false)
    setReset(oldState => oldState + 1)
    console.log(noOfQuestions, currentQuestion)
  }

  console.log(currentQuestion, noOfQuestions)
  const questionElements = allQuestionData.slice(currentQuestion, currentQuestion + pageSize).map(question => {
    return (
      <div className="question-block" key={question.id}>
        < Question
          key={question.id}
          questionData={question}
          handleClick={handleAnswerClicks}
          roundFinished={roundFinished}
        />
      </div>
    )
  })


  return (
    <div>
      {
        gameStarted ?
          <div className='container' >
            <h1 className='ingame-title' onClick={() => window.location.reload(false)}>Quizee</h1>
            {questionElements}
            <div className="status">
              {roundFinished
                ?
                <div className='end-game'>
                  <p className="score">You got {points} of {currentQuestion + pageSize} correct answers!</p>
                  {currentQuestion + pageSize === noOfQuestions
                    ?
                    <div>
                      <button className='btn status-btn' onClick={() => restartGame()}>Play again</button>
                      <button className='btn status-btn' onClick={() => window.location.reload(false)}>Select categories</button>
                    </div>
                    :
                    <button
                      className='btn status-btn'
                      onClick={nextQuestions}>
                      Next set of Questions
                    </button>
                  }
                </div>
                :
                <button className='btn status-btn' onClick={() => checkAnswers()}>Check answers</button>
              }
            </div>
          </div>
          :
          <div className='start-screen'>
            <h1>Quizee</h1>
            <p className='tagline'>Test your knowledge!</p>
            <GameSettings
              handleClick={handleCategoryClicks}
              categories={categories}
              noOfQuestions={noOfQuestions}
              handleSelect={setNoOfQuestions}
            />
            <button className='btn status-btn' onClick={() => setGameStarted(true)}>Let's do this!</button>
          </div>
      }
    </div >
  )
}

export default App;
