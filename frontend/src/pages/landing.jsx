import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2>VideoTalk</h2>
                </div>
                <div className="navlist">
                    <p onClick={() => navigate("/aljk23")}>Join as Guest</p>
                    <p onClick={() => navigate("/auth")}>Register</p>
                    <div onClick={() => navigate("/auth")} role="button">
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <main className="landingMainContainer">
                <div className="textContent">
                    <h1><span>Connect</span> with your loved ones</h1>
                    <p>Bridge the distance with VideoTalk</p>
                    <div className="ctaButton" role="button">
                        <Link to="/auth">Get Started</Link>
                    </div>
                </div>

                <div className="imageContent">
                    <img src="/mobile.png" alt="VideoTalk illustration" />
                </div>
            </main>
        </div>
    )
}
