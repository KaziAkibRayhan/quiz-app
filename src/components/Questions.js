import React, { useEffect, useState } from "react";
import data from "../database/data";
import { useFetchQuestion } from "../hooks/FetchQuestion";

const Questions = () => {
  const [checked, setChecked] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const question = data[0];

  useEffect(() => {
    console.log(isLoading);
    console.log(apiData);
    // console.log(serverError);
  }, [apiData, isLoading]);

  function onSelect() {
    // setChecked(true)
    // console.log("select");
  }
  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>
      <ul key={question.id}>
        {question.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              name="options"
              id={`q${i}-option`}
              value={false}
              onChange={onSelect()}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
