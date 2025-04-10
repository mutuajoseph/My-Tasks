import React from 'react'

export const TaskInput = () => {
    return (
        <div className='task--input'>
            <input className='input--control' type="text" placeholder='Add a new task' />
            <button>+</button>
        </div>
    )
}