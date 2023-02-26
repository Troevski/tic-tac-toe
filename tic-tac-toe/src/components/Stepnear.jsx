import React from 'react';

const Stepnear = ({step, onClick, prevStates}) => {
// step ? 'Вернуть шаг 0': 'Вернуть шаг X'
return (
        prevStates.map((el, idx) => {
                return (
                    <button value = {el} key = {idx} onClick = {onClick} className='historyButton' >
                        {el ? (idx % 2 === 0 ? 'Следующий ход Х' : 'Следующий ход 0') : `${step}`}
                    </button>
                )
            
            }) 
    );
};

export default Stepnear;