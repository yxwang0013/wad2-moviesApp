import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/authContext'
import { Link, useHistory } from "react-router-dom"

export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/movies/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <div style={{ width: 1000 }}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4" id="profile">Account</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <div style={{ marginLeft: 375 }}>
                        <strong>Email:</strong> {currentUser.email}
                    </div>
                    {/* <Link to="/movies/update-profile" classname="btn btn-primary w-100 mt-4">
                        Update Account
                    </Link> */}
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </div>
    )
}
