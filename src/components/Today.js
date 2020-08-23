import React from 'react';

  const Today = props => {
    //Get current date info
    const dateObj = new Date();
    const weekday = dateObj.toLocaleString("default", { weekday: "long"})
    const date = dateObj.toLocaleString("default", { day: "2-digit", month: "long", year: "numeric"})

    return (
      <div>
      <h1>{props.title}</h1>
        <p>{weekday}</p>
        <p>{date}</p>
      </div>
    )
  }

export default Today;
