import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const {name , value} = e.target
        setForm({ ...form, [name]:value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));

        if (
            user &&
            user.email === form.email &&
            user.password === form.password
        ) {
            localStorage.setItem("isLoggedIn", "true");
            alert('Login Successfully ')
            
            navigate("/home");
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>

            <input name="email" placeholder="Email" onChange={handleChange} /> <br /> <br />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <p>{error}</p>


            <button type="submit">Login</button>
        </form>
    );
}

export default Login;