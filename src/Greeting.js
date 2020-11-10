import React from 'react';

export const Greeting = (props) => {
  const isMorning = (new Date()).getHours() < 12;
  const greetingHeader = isMorning ? <h3>Good Morning {props.name}!</h3> : <h3>Good Evening {props.name}!</h3>;

  return (
    <>
      {greetingHeader}
      <p>You have {props.numberOfMessages} new messages</p>
    </>
  );
}
