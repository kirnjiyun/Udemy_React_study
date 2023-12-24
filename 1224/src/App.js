import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import "./App.css";
import { useRef, useReducer, useCallback, useMemo } from "react";
import { TodoDispatchContext } from "./TodoContext";
import { TodoStateContext } from "./TodoContext";

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

        default:
            return state;
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = useCallback((content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                createdDate: new Date().getTime(),
            },
        });
    }, []);

    const onUpdate = useCallback((targetId) => {
        dispatch({ type: "UPDATE", data: targetId });
    }, []);

    const onDelete = useCallback((targetId) => {
        dispatch({ type: "DELETE", data: targetId });
    }, []);

    const memoizedDispatches = useMemo(
        () => ({
            onCreate,
            onUpdate,
            onDelete,
        }),
        [onCreate, onUpdate, onDelete]
    );

    return (
        <div className="App">
            <Header />
            <TodoStateContext.Provider value={todos}>
                <TodoDispatchContext.Provider value={memoizedDispatches}>
                    <TodoEditor />
                    <TodoList />
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

export default App;
