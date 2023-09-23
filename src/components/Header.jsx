import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="Netflix" style={{ maxWidth: "150px" }} />
            </Link>

        </header>
    )
}

export default Header
