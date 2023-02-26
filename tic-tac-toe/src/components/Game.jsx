import React, { useEffect, useState } from 'react';
import Board from './Board';
import { helperfunction } from './helperfunction';
import Stepnear from './Stepnear';

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(''));
    const [step, setStep] = useState(true);
    const [hideBNlock, setHideBlock] = useState(false);
    const [prevStates, setPrevStates] = useState([]);
    const winner = helperfunction(board);

// каждый изменённый стейт зщаписывать в массив 
    
    console.log(board)

    const handleStep = (idx) => {
        const copyBoard = [...board]
        !winner && !copyBoard[idx] && (
            copyBoard[idx] = step ? 'X' : '0'
        )
// чтобы после каждого хода записывать состояние борда в массив превстэйт
        setPrevStates([...prevStates, board])
        setBoard(copyBoard)
        setStep(!step)
    }

    useEffect(() => {
        board.filter((el) => {
            if(el){
                setHideBlock(true)
            }
        })
    }, [board])

    const deletePrevStep = () => {
        if(prevStates.length > 0){
            const lastState = prevStates[prevStates.length - 1];
            setBoard(lastState)
            setPrevStates(prevStates.slice(0, prevStates.length - 1))
            setStep(!step)
        }
    }

    return (
        <div className='wrapper'>
            <button 
            className='startNewBtnGame'
            onClick = {() => {
                setBoard(Array(9).fill(''));
                setHideBlock(false);
                setPrevStates([]);
            }}
            >
                Начать игру заного?
            </button>  
                {
                    hideBNlock && !winner && (
                        <Stepnear prevStates = {prevStates} onClick = {() => deletePrevStep()} step ={step} />
                    )
                }
            <Board  step = {step} handleStep = {handleStep} board = {board}/>
            <p className ={`${winner ? 'won' : 'whoIsWin'}`}>
                {winner? 'Поздравляем, победил ' + winner + '!' : (`Следующий шаг ${step ? 'X' : '0'}`)}
            </p>
        </div>
    );
};

export default Game;

