import React from "react";
import "./TodoEditor.css";

export default function TodoEditor() {
    return (
        <div className="todoeditor">
            <input placeholder="할 일을 입력해주세용" />
            <button>추가</button>
        </div>
    );
}
