import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import "./App.css";
import { useRef, useReducer, useCallback } from "react";

const mockData = [
    {
        id: 0,
        isDone: true,
        content: "뽀득뽀득 소리나게 씻기",
        createdDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "감바스 해먹기 냠",
        createdDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: true,
        content: "레그프레스 10개씩 4세트 뿌셔뿌셔!",
        createdDate: new Date().getTime(),
    },
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [...state, action.data];

        case "UPDATE":
            return state.map((it) =>
                it.id === action.data ? { ...it, isDone: !it.isDone } : it
            );

        case "DELETE":
            return state.filter((it) => it.id !== action.data);
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);
    const onCreate = (content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                createdDate: new Date().getTime(),
            },
        });
    };
    const onUpdate = useCallback((targetId) => {
        dispatch({ type: "UPDATE", data: targetId });
    }, []);
    const onDelete = useCallback((targetId) => {
        dispatch({ type: "DELETE", data: targetId });
    }, []);

    return (
        <div className="App">
            <Header />
            <TodoEditor onCreate={onCreate} />
            <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
}
export default App;
