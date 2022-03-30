import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/UI/Button'
import Card from '../components/UI/Card'
import Input from '../components/UI/Input'
import AuthContext from '../context/auth-context'
import './Auth.css'

const Auth = () => {
    const auth = useContext(AuthContext)
    const [enteredEmail, setEnteredEmail] = useState("")
    const [enteredPassword, setEnteredPassword] = useState("")
    
    const navigate = useNavigate();

    const emailChangeHandler = event => {
        setEnteredEmail(event.target.value);
    }

    const passwordChangeHandler = event => {
        setEnteredPassword(event.target.value)
    }

    const authFormSubmitHandler = (event) => {
        event.preventDefault()
        console.log(enteredEmail,enteredPassword);
        auth.login()
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
