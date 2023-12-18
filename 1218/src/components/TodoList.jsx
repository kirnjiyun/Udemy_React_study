import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onUpdate, onDelete }) {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const filterTodos = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

    return (
        <div className="TodoList">
            <h6>Todos</h6>
            <input
                type="text"
                placeholder="검색어를 입력해주세용"
                value={search}
                onChange={onChangeSearch}
            />
            <div className="todos_wrapper">
                {filterTodos().map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
}
