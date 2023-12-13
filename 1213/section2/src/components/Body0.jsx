import React from "react";

export default function Body() {
    const number = 10;
    const String = "스트링이지롱";
    const bool = true;
    const obj = { a: 1 };
    const func = () => {
        return "func";
    };
    return (
        <div>
            <h1>body</h1>
            <h2>{String}</h2>
            <h3>{number % 2 == 0 ? "짝수" : "홀수"}</h3>
            <h3>{bool}</h3>
            <h3>{func()}</h3>
            <h3>{obj.a}</h3>
        </div>
    );
}
