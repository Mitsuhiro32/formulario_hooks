import { useState } from "react";

const Form = () => {
    const [firsName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const Register = (e) => {
        e.preventDefault();
        const newUser = { firsName, lastName, email, password, confirmPassword };
        console.log(newUser);
    }

    return (
        <>
            <form onSubmit={Register}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <br />
                <button type="submit">Register</button>
            </form>

            <div className="data"> 
                <h2>Your Form Data</h2>
                <p>First Name: {firsName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    );
}

export default Form;