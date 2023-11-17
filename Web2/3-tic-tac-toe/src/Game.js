import React from 'react'
import './game.css'
import Square from './Square';

function Game() {
    const onClickSquare = () => {
console.log('clicked');
    }
    return (
        <div className='game'>
            <div className='game-board'>
                <div className='board-row'>
                    <Square value={1} squareClicked={onClickSquare} />
                    <Square value={2} squareClicked={onClickSquare} />
                    <Square value={3} squareClicked={onClickSquare} />
                </div>
                <div className='board-row'>
                    <Square value={4} squareClicked={onClickSquare} />
                    <Square value={5} squareClicked={onClickSquare} />
                    <Square value={6} squareClicked={onClickSquare} />
                </div>
                <div className='board-row'>
                    <Square value={7} squareClicked={onClickSquare} />
                    <Square value={8} squareClicked={onClickSquare} />
                    <Square value={9} squareClicked={onClickSquare} />

                </div>
            </div>
        </div>
    )
}

export default Game;