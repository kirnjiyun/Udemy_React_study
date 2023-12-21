import React, { useState, useMemo } from "react";
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

    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        // console.log("todo 분석 함수 호출");
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    }, [todos]);
    //useEffect랑 비슷한데 차이점은 콜백함수가 반환하는 값을 반환하게 된다는 것이다.

    return (
        <div className="TodoList">
            <h6>Todos</h6>
            <div>전체 투두 : {totalCount}</div>
            <div>완료:{doneCount}</div>
            <div>미완성:{notDoneCount}</div>
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
