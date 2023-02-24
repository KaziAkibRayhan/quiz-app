import React from "react";

const Quiz = () => {
    const onNext = () =>{
        console.log('On Next');
    }
    const onPrev = () =>{
        console.log('On Prev');
    }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      {/* Display Questions */}

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>Previous</button>
        <button className="btn next" onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default Quiz;
