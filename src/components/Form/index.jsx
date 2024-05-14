import { useState } from "react";

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const Register = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log(newUser);
    }

    return (
        <>
            <form onSubmit={Register}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" placeholder="First Name" onChange={(e) => {
                        setFirstName(e.target.value);
                        (e.target.value.length < 2) ? setFirstNameError(true) : setFirstNameError(false);
                    }} />
                    {firstNameError ? <p style={{ color: 'red' }}>El nombre debe tener al menos 2 caracteres</p> : ""}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" placeholder="Last Name" onChange={(e) => {
                        setLastName(e.target.value);
                        (e.target.value.length < 2) ? setLastNameError(true) : setLastNameError(false);
                    }} />
                    {lastNameError ? <p style={{ color: 'red' }}>El apellido debe tener al menos 2 caracteres</p> : ""}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Email" onChange={(e) => {
                        setEmail(e.target.value);
                        (e.target.value.length < 5) ? setEmailError(true) : setEmailError(false);
                    }} />
                    {emailError ? <p style={{ color: 'red' }}>El email debe tener al menos 5 caracteres</p> : ""}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="Password" onChange={(e) => {
                        setPassword(e.target.value);
                        (e.target.value.length < 8) ? setPasswordError(true) : setPasswordError(false);
                    }} />
                    {passwordError ? <p style={{ color: 'red' }}>La contraseña debe tener al menos 8 caracteres</p> : ""}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" placeholder="Confirm Password" onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        (e.target.value !== password) ? setConfirmPasswordError(true) : setConfirmPasswordError(false);
                    }} />
                    {confirmPasswordError ? <p style={{ color: 'red' }}>La contraseña no coincide</p> : ""}
                </div>
                <br />
                <button type="submit">Register</button>
            </form>

            <div className="data"> 
                <h2>Your Form Data</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    );
}

export default Form;