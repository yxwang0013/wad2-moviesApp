import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/authContext'
import { Link, useHistory } from 'react-router-dom'

export default function Signup() {
    // const { currentUser } = useContext(AuthContext)
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()



    const handleSubmit = async (e) => {
        e.preventDefault()

        if (passwordRef.current.value !==
            passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/movies/profile")
        } catch {
            setError('Failed to create an account')
        }

        setLoading(false)
    }

    return (
        <div style={{ width: 1000 }}>
            <Card classname="d-flex align-items-center justify-content-center">
                <Card.Body>
                    <h2 className="text-center mb-4" id="signup">Sign Up</h2>
                    {/* {currentUser && currentUser.email} */}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <div style={{ marginLeft: 440 }}>
                        <Button disabled={loading} classname="w-100" type="submit" id="signupbutton">
                            Sign Up
                        </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account?  <Link to="/movies/login">Log In</Link>
            </div>
        </div>
    )
}

