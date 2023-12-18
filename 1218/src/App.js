import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import "./App.css";
import { useState, useRef } from "react";

const mockData = [
    { id: 0, isDone: true, content: "뽀득", createData: new Date().getTime() },
    {
        id: 1,
        isDone: false,
        content: "밥 맛있게 먹기",
        createData: new Date().getTime(),
    },
    {
        id: 2,
        isDone: true,
        content: "방 정리하기",
        createData: new Date().getTime(),
    },
];

function App() {
    const [todos, setTodos] = useState([]);
    const idRef = useRef(3);
    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            createData: new Date().getTime(),
        };
        setTodos([...todos, newTodo]);
    };
    return (
        <div className="App">
            <Header />
            <TodoEditor onCreate={onCreate} />
            <TodoList />
        </div>
    );
}
export default App;
