import { useEffect, useState } from "react";

const Calculation = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
        setCalculation(() => count * 2);
    },[count]);
    return(
        <div>
            <h4>Hey,{count}</h4>
            <button onClick={() => setCount((c) => c + 1)} className="btn">Calculation:{calculation}</button>
        </div>
    );
}

export default Calculation;