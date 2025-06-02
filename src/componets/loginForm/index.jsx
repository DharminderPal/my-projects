import React, { useState } from "react";
import "./Form.css"; 




const LoginForm =()=>{
const [form, setForm] = useState({ username: "", password: "" });
const [error, setError] = useState("");

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
        setError("Please enter both username and password.");
        return;
    }
    // Handle login logic here
};


return (
    <div className="container">
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="title">Login</h2>
            {error && <div className="error">{error}</div>}
            <div className="inputGroup">
                <label htmlFor="username" className="label">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="input"
                    value={form.username}
                    onChange={handleChange}
                    autoComplete="username"
                />
            </div>
            <div className="inputGroup">
                <label htmlFor="password" className="label">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="input"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                />
            </div>
            <button type="submit" className="button">Login</button>
        </form>
    </div>
)
}
export default LoginForm;