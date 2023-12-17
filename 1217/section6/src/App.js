import "./App.css";
import { useState, useEffect, useRef } from "react";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";
import useUpdate from "./hooks/useUpdate";
import useInput from "./hooks/useInput";

function App() {
    const isMountRef = useRef();
    const [count, setCount] = useState(0);
    const [text, onChangeText] = useInput();
    const onClickButton = (value) => {
        setCount(count + value);
    };
    useUpdate(() => {
        "앱 컴포넌트 업데이트";
    });
    useEffect(() => {
        console.log("마운트");
    }, []);

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input value={text} onChange={onChangeText} />
            </section>
            <section>
                <section>
                    <Viewer count={count} />
                    {(count % 2 === 0 && <Even />) || "홀수입니다"}
                </section>
            </section>
            <section>
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    );
}

export default App;

// 마운트 => 업데이트 => 언마운트
