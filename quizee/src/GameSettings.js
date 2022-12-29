import React from 'react'

function GameSettings(props) {
    const catButtons = props.categories.map(category => (
        <button
            className={`category-btn ${category.isSelected ? 'selected-btn' : ''}`}
            key={category.id}
            id={category.id}
            onClick={() => props.handleClick(category.id)}>
            {category.name}
        </button >
    ))

    return (
        <div className='options'>
            <p className='instructions'>Select your categories:</p>
            <div className='categories'>
                {catButtons}
            </div>
            <label className='instructions'>Choose number of questions:
                <select
                    name='number-of-qs'
                    className='number-of-qs'
                    id='number-of-qs'
                    value={props.noOfQuestions}
                    onChange={(e) => props.handleSelect(parseInt(e.target.value))}>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>
                </select>
            </label>
        </div>
    )
}

export default GameSettings