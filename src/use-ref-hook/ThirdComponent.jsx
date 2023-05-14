import { useEffect, useRef, useState } from "react";

const ThirdComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    },[inputValue]);

    return(
        <div>
            <h1>This Is useRef Hook Example For Tracking State Change</h1>
            <input type="text" className="form-input" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </div>
    );
}

export default ThirdComponent;