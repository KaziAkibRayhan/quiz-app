import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Questions from "./Questions";


const Quiz = () => {
   const state = useSelector((state) => state);
   useEffect(() =>{
    console.log(state);
   },[state])

  const onNext = () => {
    console.log("On Next");
  };

  const onPrev = () => {
    console.log("On Prev");
  };

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* Display Questions */}
      <Questions />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Previous
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
