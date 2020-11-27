import React from 'react'

const QuizRecap = props => {
    const { data } = props
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default QuizRecap