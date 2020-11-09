import React from 'react';

function Greeting() {
    const isMorning = (new Date()).getHours < 12;

    return isMorning ? <h3>Good Morning!</h3> : <h3>Good Evening!</h3>;
}

export default Greeting;
