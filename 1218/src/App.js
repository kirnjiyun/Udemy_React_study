import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import "./App.css";
import { useState, useRef } from "react";

const mockData = [
    {
        id: 0,
        isDone: true,
        content: "뽀득뽀득 소리나게 씻기",
        createData: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "감바스 해먹기 냠",
        createData: new Date().getTime(),
    },
    {
        id: 2,
        isDone: true,
        content: "레그프레스 10개씩 4세트 뿌셔뿌셔!",
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
            <TodoList todos={todos} />
        </div>
    );
}
export default App;
