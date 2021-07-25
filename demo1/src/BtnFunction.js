import React from "react";
import "./BtnFunction.css";
import { useState, useEffect, useMemo, useRef } from "react";
function BtnFunction() {
  const [state, setState] = useState(true);
  const [counter, setCounter] = useState(0);
  const [email, setEmail] = useState("");
  const prevCount = useRef([]);

  const fetchEmail = () => {
    // api call
    const url = "https://randomuser.me/api/";
    fetch(url)
      .then((res) => res.json())
      .then((user) => {
        setEmail(user.results[0].email);
      });
  };
  // useEffect at creation and anytime
  //   useEffect(() => {
  //     alert("useEffect at creation and anytime");
  //   });

  // useEffect at creation
  useEffect(() => {
    //   alert("Component created");
    fetchEmail();
  }, []);

  //   // useEffect at state change
  useEffect(() => {
    prevCount.current = [...prevCount.current, counter];
  }, [counter]);

  //   // this will run when the component is destroyed or before the component is removed from UI.
  //   useEffect(() => {
  //     return () => alert("Component will be deleted");
  //   });

  const cube = useMemo(() => {
    return counter * counter;
  }, [counter]);

  return (
    <div className="btn__function__wrapper">
      <h1>Functional Component</h1>
      <ul>
        <li>
          <h2> useState </h2>
          {state ? (
            <div>
              <h2> State = True</h2>
              <button onClick={() => setState(false)}> Set False</button>
            </div>
          ) : (
            <div>
              <h2> State = False</h2>
              <button onClick={() => setState(true)}>Set True</button>
            </div>
          )}
        </li>
        <li>
          <h2> useMemo</h2>
          <h2>
            {" "}
            Count = {counter} Count^2 = {cube}
          </h2>
          <h2>
            Previously:{" "}
            <div className="values">
              {prevCount.current.map((value) => (
                <p> {value}, </p>
              ))}
            </div>
          </h2>
          <div className="values">
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              +{" "}
            </button>
            <button
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              -
            </button>
          </div>
        </li>
        <li>
          <h2> useEffect</h2>
          <h2> Fetching email from API</h2>
          <h2>Email: {email}</h2>
          <button onClick={() => fetchEmail()}> Fetch new Email</button>
        </li>
      </ul>
    </div>
  );
}

export default BtnFunction;
