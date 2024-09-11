import "./App.css";
import Ball from "./Components/Ball/Ball.tsx";
import {useState} from "react";

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const Numbers = numbers.map((number: number, index: number) => {
        return (
            <Ball key={index} number={number}/>
        );
    });

    const getNewNumbers = () => {};

    return (
        <div className="container">
            <div className="ball-container">{Numbers}</div>
            <button type="button" className="button" onClick={getNewNumbers}>New numbers</button>
        </div>
    );
};

export default App;