import React, { useEffect } from 'react'

function Question(props) {
    const shuffledAnswers = props.questionData.shuffled_answers.map(answer => (
        <button
            className={
                `answer-btn 
                ${!props.roundFinished && answer.isSelected ? 'selected-btn' : ''}
                ${props.roundFinished && answer.isCorrect ? 'correct-btn' : ''}
                ${props.roundFinished && answer.isSelected && !answer.isCorrect ? 'wrong-btn' : ''}
                `}
            key={answer.id}
            id={answer.id}
            onClick={() => props.handleClick(props.questionData.id, answer.id)}>
        </button>
    ))

    // Using this hook to render the HTML text correctly. (ie without showing HTML codes)
    useEffect(() => {
        document.getElementById(props.questionData.id).innerHTML = props.questionData.question
        for (let answer of props.questionData.shuffled_answers) {
            document.getElementById(answer.id).innerHTML = answer.answerText
        }
    })

    return (
        <div>
            <h3 className='question' id={props.questionData.id}>{props.questionData.question}</h3>
            {shuffledAnswers}
        </div>
    )
}

export default Question