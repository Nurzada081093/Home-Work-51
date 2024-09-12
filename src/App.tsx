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

    const getNewNumbers = () => {

        const result:number[] = [];

        const getRandomNumbersArray= (min:number, max:number, count:number) => {
            while (result.length < count) {
                const randomNumber:number = Math.floor(Math.random() * (max - min + 1)) + min;
                if (result.indexOf(randomNumber) === -1) {
                    result.push(randomNumber);
                }
            }

            return result;
        };

        getRandomNumbersArray(5, 36, 5);
        const newArray: number[] = result.sort((a:number, b:number) => a - b);

        setNumbers(newArray);
    };

    return (
        <div className="container">
            <div className="ball-container">{Numbers}</div>
            <button type="button" className="button" onClick={getNewNumbers}>New numbers</button>
        </div>
    );
};

export default App;