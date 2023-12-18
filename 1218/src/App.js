import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <TodoEditor />
            <TodoList />
        </div>
    );
}
export default App;
