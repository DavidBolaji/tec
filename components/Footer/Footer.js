import React from 'react'
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.group} >
                <h3> Company Name</h3>
                <p>Trailblazers Educational Consult</p>
            </div>
             <div className={styles.group}>
                <h3> Products</h3>
                <ul>
                    <li><Link href="/home">Tec in every home</Link></li>
                    <li><Link href="/school">Tec in every school</Link></li>
                    <li><Link href="/community">Tec in every community</Link></li>
                    <li><Link href="">Tec ict</Link></li>
                </ul>
            </div>
             <div className={styles.group}>
                <h3> Useful Links</h3>
                <ul>
                    <li><Link href="">About us</Link></li>
                    <li><Link href="">Contact us</Link></li>
                </ul>
            </div>
             <div className={styles.group}>
                <h3> Contacts</h3>
                <ul>
                    <li><Link href="">tecworld.com.ng</Link></li>
                    <li><Link href="">info@tecworld.com.ng</Link></li>
                    <li><Link href="">+2347086513100</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
