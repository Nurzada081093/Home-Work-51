import "./Ball.css";
import * as React from "react";

interface IBall{
    number: number | null;
}

const Ball: React.FC<IBall>= ({number}) => {
    return (
        <div className="ball">
            <p className="number">{number}</p>
        </div>
    );
};

export default Ball;