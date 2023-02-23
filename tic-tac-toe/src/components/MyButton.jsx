import React from 'react';

const MyButton = ({value, onClick}) => {
    return (
        <div>
            <button onClick = {onClick} className='MyBtn'>
                {value}
            </button>
        </div>
    );
};

export default MyButton;