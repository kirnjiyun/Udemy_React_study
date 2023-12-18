import React from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

export default function TodoList() {
    return (
        <div className="TodoList">
            <h6>Todos</h6>
            <input type="text" placeholder="검색어를 입력해주세용" />
            <div className="todos_wrapper">
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    );
}
