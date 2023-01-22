import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
    const [username, setUsername] = useState(" ");
    const [password, setPassword] = useState(" ");
    const navigate = useNavigate();
    //login button
    function login() {
         fetch('https://dummyjson.com/auth/login', {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => res.json())
        .then(res=>{
            console.log(res)
            localStorage.setItem('id',res.id)
            localStorage.setItem('username',res.username)
            localStorage.setItem('email',res.email)
            localStorage.setItem('firstName',res.firstName)
            localStorage.setItem('lastName',res.lastName)
            localStorage.setItem('gender',res.gender)
            localStorage.setItem('token',res.token)
            navigate('./Profile');
        });
}
return (
    <>
        <div className="App">
            <h1>Login Page</h1>
            <div className="container">
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={login}>Login</button>
            </div>
        </div>
    </>
);
}

export default LoginPage;
