import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/UI/Button'
import Card from '../components/UI/Card'
import Input from '../components/UI/Input'
import './Auth.css'

const Auth = () => {
    const navigate = useNavigate();
    const [enteredEmail, setEnteredEmail] = useState("")
    const [enteredPassword, setEnteredPassword] = useState("")

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setEnteredPassword(e.target.value)
    }

    const authFormSubmitHandler = (e) => {
        e.preventDefault();
        const newUser = {
            email: enteredEmail,
            password: enteredPassword
        }
        console.log(newUser);
        navigate("/");
    }

    return (
        <Card className="authentication">
            <form onSubmit={authFormSubmitHandler}>
                <Input
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="E-Mail"
                    value={enteredEmail}
                    onChange={emailChangeHandler} />
                <Input
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    value={enteredPassword}
                    onChange={passwordChangeHandler} />
                <Button type="submit">
                    Login
                </Button>
            </form>
        </Card>
    )
}

export default Auth
