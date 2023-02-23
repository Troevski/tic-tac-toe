import React from 'react';
import MyButton from './MyButton';

const Board = ({ board, handleStep}) => {
    return (
        <div className='Board'>
            {
                board.map((el, idx) => (
                    <MyButton key = {idx}  onClick = {() => handleStep(idx)} value ={el}/> 
                )) 
            }
        </div>
    );
};

export default Board;