import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/UI/Button'
import Card from '../components/UI/Card'
import Input from '../components/UI/Input'
import AppContext from '../context/app-context'
import './Auth.css'

const Auth = () => {
    const appCtx = useContext(AppContext)
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
        event.preventDefault();

        const user = {
            email: enteredEmail,
            password: enteredPassword
        }
        console.log(user)
        
        appCtx.login()

        navigate("/products");
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
