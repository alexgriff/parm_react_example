import React from 'react';

export default (props) => {
  const btnText = props.numLabs > 10 ? "Wow so many Labs" : "Do more labs";
  console.log('button has rendered');
  return (
    <button onClick={props.callbackProp} >{btnText}</button>
  )
}
