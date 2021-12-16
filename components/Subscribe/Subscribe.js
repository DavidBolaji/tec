import React from 'react';
import styles from './Subscribe.module.css'
import Image from 'next/image';
import Newsletter from '../../assets/images/newsletter.webp';
import next from '../../assets/images/next.png';

const Subscribe = () => {
    const submitHandler = () => {

    }
    return (
        <div className={styles.subscribe}>
            <div className={styles.img}>
                <Image src={Newsletter} alt="tec-child" className={styles.child} />
            </div>
            <div className={styles.text}>
                <h3>Looking for free resources? join our mailing list</h3>
                <p>Subscribe today to receive our news letter</p>

                <form  onSubmit={submitHandler} className={styles.main}>
                    <div className={styles.form}>
                        <input type="email" placeholder="Enter yout Email Address" />
                        <button type="submit">
                           Go
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Subscribe
