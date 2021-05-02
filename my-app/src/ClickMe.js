import React from 'react';

function givealert()
{
    alert("Wrong me");
}

export const ClickMe = () => {
    return (
        <button onClick={givealert}>Click Me</button>
    )
}