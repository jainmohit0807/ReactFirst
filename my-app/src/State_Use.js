import {React, useState} from 'react';

export const StateUse = () => {
    const [numberofClick,setNumberOfClick]=useState(0);
    const increment = () => setNumberOfClick(numberofClick + 1);
    return (
        <>
        <p>You have clicked {numberofClick} number of times</p>
        <button onClick={increment}>Number of clicks</button>
        </>
    )

}