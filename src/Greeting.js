import React from 'react';

function Greeting() {
    const isMorning = (new Date()).getHours < 12;

    return isMorning
      ? (
        <>
            <h3>Good Morning!</h3>)
            <p>You have 5 new messages</p>
        </>
      )
      : (
        <>
            <h3>Good Evening!</h3>
            <p>You have 5 new messages</p>
        </>
      );
}

export default Greeting;
