import React, { useState } from 'react';
import Board from './Board';
import { helperfunction } from './helperfunction';

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [step, setStep] = useState(true);
    const winner = helperfunction(board);

    console.log(board)

    const handleStep = (idx) => {
        const copyBoard = [...board]

        !winner && !copyBoard[idx] && (
            copyBoard[idx] = step ? 'X' : '0'
        )
        
        setBoard(copyBoard)
        setStep(!step)
        
    }

    const startGameAgain = () => {
        return (
            <button onClick ={() => setBoard(Array(9).fill(null))} className='startNewBtnGame'>
                Начать игру заного?
            </button>
            
        )
    }

    return (
        <div className='wrapper'>
            {startGameAgain()}
            <Board  step = {step} handleStep = {handleStep} board = {board}/>
            <p className='whoIsWin'>
                {winner? 'Поздравляем, победил ' + winner + '!' : (step ? 'Следующий шаг X' : 'Следующий шаг 0')}
            </p>
        </div>
    );
};

export default Game;

