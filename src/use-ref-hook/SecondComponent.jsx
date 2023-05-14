import { useRef } from "react";

const SecondComponent = () => {
    const inputElement = useRef();

    const handleFocus = () => {
        inputElement.current.style.borderColor = 'red';
        console.log(inputElement.current.textContent);
    }
    return (
        <div>
            <h1>SecondComponent</h1>
            <input type="text" className="form-input" ref={inputElement} />
            <p ref={inputElement}>hello</p>
            <button onClick={handleFocus} className="btn-block btn">Submit</button>
        </div>
    );
}

export default SecondComponent;