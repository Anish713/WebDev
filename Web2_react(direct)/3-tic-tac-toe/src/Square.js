import React from 'react'

export default function ({value, squareClicked}) {
    return (
        <button className='square' onClick={squareClicked}>{value}</button>
    )
}
