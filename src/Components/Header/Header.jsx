import React from 'react'
import { Navbar } from '../Navbar'
import { Logo } from '../Logo'
import styles from "./header.module.css"

const Header = () => {
    return (
        <header className={styles.header} >
            <Logo />
            <Navbar />
        </header>
    )
}

export default Header
