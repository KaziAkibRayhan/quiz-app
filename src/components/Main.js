import React, { useRef } from "react";
import {Link} from 'react-router-dom';
import '../styles/Main.css';

const Main = () => {
  const inputRef = useRef(null);
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points is award for the connect answer.</li>
        <li>Each question has three option. You can choose only options. </li>
        <li>You can review and changes answers before the quiz finish.</li>
        <li>The result will be the declared at the end of the quiz.</li>
      </ol>
      <form id="form">
        <input ref={inputRef} type="text" className="userid" placeholder="Username*" />
      </form>
      <div className="start">
        <Link className="btn" to={'quiz'}>Start Quiz</Link>
      </div>
    </div>
  );
};

export default Main;
