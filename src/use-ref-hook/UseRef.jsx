import { useEffect, useRef, useState } from "react";

const UseRef = () => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
    })
    return (
        <div>
            <h1>useRef Hook</h1>
            <h5>Render Count: {count.current}</h5>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="form-input" />
        </div>
    );
}
export default UseRef;