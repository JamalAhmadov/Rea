import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.navbar} >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/community">Community</NavLink>
            <NavLink to="/features">Features</NavLink>
        </nav>
    )
}

export default Navbar
