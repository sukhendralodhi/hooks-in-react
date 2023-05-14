import { useState } from "react";

const Form = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.name);                                                                        
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user.name);
        console.log(user.email);
        console.log(user.password);
        
    }

    return (
        <div className="App">
            <h2>Multiple Inputs:</h2>
            {/*form section start */}
            <form action="" className="form" onSubmit={handleSubmit}>
                {/* name */}
                <div className="form-row">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-input" id="name" value={user.name} onChange={handleChange} name="name" />
                </div>
                {/* email */}
                <div className="form-row">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-input" id="email" value={user.email} onChange={handleChange} name="email" />
                </div>
                {/* password */}
                <div className="form-row">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-input" id="password" value={user.password} onChange={handleChange} name="password" />
                </div>
                {/* button */}
                <button className="btn btn-block">submit</button>
            </form>


        </div>
    );
}

export default Form;