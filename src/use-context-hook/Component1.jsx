import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const Component1 = () => {
    const [user, setUser] = useState('Sanju Rajput');

    return (
        <UserContext.Provider value={user}>
            <h2>Hello, {user}</h2>
            <Component2 />
            <button onClick={() => setUser('Mohan')} className="btn">Click Me!</button>
        </UserContext.Provider>
    );
}

const Component2 = () => {
    return (
        <div>
            <h1>Component 2</h1>
            <Component3 />
        </div>
    );
}

const Component3 = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Component 3</h1>
            <p>Hello, {user}</p>
            <Component4 />
        </div>
    );
}

const Component4 = () => {
    return (
        <div>
            <h1>Component 4</h1>
            <Component5 />
        </div>
    );
}

const Component5 = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Component 5</h1>
            <h2>Hello, {user}</h2>
        </div>
    );
}
export default Component1;