import React from 'react';

  const Welcome = props => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.children}
      </div>
    )
  }

export default Welcome;
