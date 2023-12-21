import React from "react";
import { memo } from "react";
import "./TodoItem.css";
function TodoItem({ id, isDone, createdDate, content, onUpdate, onDelete }) {
    const onChangeCheckBox = () => {
        onUpdate(id);
    };
    const onDeleteButton = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input
                type="checkbox"
                checked={isDone}
                onChange={onChangeCheckBox}
            />
            <div className="todo">{content}</div>
            <div className="date">
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <button onClick={onDeleteButton}>삭제</button>
        </div>
    );
}
export default memo(TodoItem);
