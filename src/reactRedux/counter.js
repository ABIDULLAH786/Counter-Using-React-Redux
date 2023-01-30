import React from "react";
import { useSelector, useDispatch } from "react-redux";

// import actions to pass it to dispatch

import { incrementCounter, decrementCounter, resetCounter } from "./actions";

const Counter = () => {
  const myState = useSelector((state) => state.ChangeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div class="container">
        <h1>Imcrement/Decrement Counter</h1>
        <h3>Using React Redux</h3>

        <div className="col-md-4 offset-4">
        <div class="input-group mb-3 ">
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-secondary"
              type="button"
              onClick={() => dispatch(decrementCounter())}
            >
              -
            </button>
          </div>
          <input
            type="text"
            class="form-control text-center "
            value={myState}
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
          />
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-secondary"
              type="button"
              onClick={() => dispatch(incrementCounter())}
            >
              +
            </button>
          </div>
        </div>
        </div>
        <button  class="btn btn-outline-danger" onClick={() => dispatch(resetCounter())}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
