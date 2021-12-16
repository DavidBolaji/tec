import React from 'react';
import styles from './nav.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '../../assets/images/menu.png';
import Logo from '../../assets/images/logo.png';
import { useDispatch } from 'react-redux';
import { tog } from './../../store/themeAction';


const Nav = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(tog())
    }
    return (
        <div className={styles.nav}>
            <div className={styles.cont}>
                <div className={styles.menu} onClick={handleClick} >
                    <Image src={Menu} alt="hamburger-menu-icon" className={styles['menu-image']}  />
                </div>
                <div className={styles.menularge} >
                    <Link href="/">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>
                <div className={styles.logo}>
                    <Image src={Logo} alt="tecworld-logo" />
                </div>
            </div>
        </div>
    )
}

export default Nav
