import "./App.css";
import Ball from "./Components/Ball/Ball.tsx";

const App = () => {
    return (
        <div className="container">
            <div className="ball-container">
                <Ball number={20}/>
                <Ball number={20}/>
                <Ball number={20}/>
                <Ball number={20}/>
                <Ball number={20}/>
            </div>
            <button type="button" className="button">New numbers</button>
        </div>
    );
};

export default App;