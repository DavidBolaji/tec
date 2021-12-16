import React from 'react';
import styles from './Connect.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Whatsapp from '../../assets/images/whatsapp.png'
import Facebook from '../../assets/images/facebook-logo.png'
import Telegram from '../../assets/images/telegram.png'

const Connect = () => {
    return (
        <div className={styles.connect}>
             <div className={styles.text}>
                <h3>Get connected</h3>
            </div>
            <div className={styles.btn}>
                <Link href=""><Image src={Whatsapp} alt="whatsapp-logo" /></Link>
                <Link href=""><Image src={Facebook} alt="facebook-logi"/></Link>
                <Link href=""><Image src={Telegram} alt="telegram-logo"/></Link>
            </div>
        </div>
    )
}

export default Connect;
