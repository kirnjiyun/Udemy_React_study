import React, { useState, useRef } from "react";
import "./TodoEditor.css";

export default function TodoEditor({ onCreate }) {
    const onClick = () => {
        if (content === "") {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };
    const inputRef = useRef();
    const [content, setContent] = useState("");
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onClick();
        }
    };
    return (
        <div className="todoeditor">
            <input
                ref={inputRef}
                value={content}
                onChange={onChangeContent}
                onKeyDown={onKeyDown}
                placeholder="할 일을 입력해주세용"
            />
            <button onClick={onClick}>추가</button>
        </div>
    );
}
