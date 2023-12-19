import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "DECREASE":
            return state - action.data;
        case "INCREASE":
            return state + action.data;
        default:
            return state;
    }
}

export default function B() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h4>{count}</h4>
            <div>
                <button
                    onClick={() => {
                        dispatch({
                            type: "DECREASE",
                            data: 1,
                        });
                    }}
                >
                    -
                </button>
                <button
                    onClick={() => {
                        dispatch({
                            type: "INCREASE",
                            data: 1,
                        });
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
}
