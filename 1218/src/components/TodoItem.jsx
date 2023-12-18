import React from "react";
import "./TodoItem.css";
export default function TodoItem() {
    return (
        <div className="TodoItem">
            <input type="checkbox" />
            <div className="todo">투두</div>
            <div className="date">작성일</div>
            <button>삭제</button>
        </div>
    );
}
