import React, { useState, useRef } from "react";
import "./Body.css";

export default function Body() {
    const [state, setState] = useState({
        name: "",
        gender: "",
        bio: "",
    });

    const nameRef = useRef();

    const onChange = (e) => {
        console.log(e.target.name + ":" + e.target.value);
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const onSubmit = () => {
        if (state.name === "") {
            nameRef.current.focus();
            return;
        }
        console.log(state);
        alert(`${state.name}님 회원가입 추카추카~!`);
    };
    return (
        <div className="body">
            <div>
                <input
                    name={"name"}
                    value={state.name}
                    onChange={onChange}
                    ref={nameRef}
                />
                {state.name.length}/1000
            </div>
            <br />
            <div>
                <select
                    name={"gender"}
                    value={state.gender}
                    onChange={onChange}
                >
                    <option value="">밝히지않음</option>
                    <option value="female">여성</option>
                    <option value="male">남성</option>
                </select>
            </div>
            <br />
            <div>
                <textarea name={"bio"} value={state.bio} onChange={onChange} />
            </div>
            <div>
                <button onClick={onSubmit}>회원가입</button>
            </div>
        </div>
    );
}
