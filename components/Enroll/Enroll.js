import React from 'react'
import styles from './Enroll.module.css';
import Link  from 'next/link';

const Enroll = () => {
    return (
        <div className={styles.enroll}>
            <div className={styles.text}>
                <h3>Start online Tutoring Now</h3>
            </div>
            <div className={styles.btn}>
                <button>
                    <Link href="/contact">
                        Enroll Now
                   </Link>
                </button>
            </div>
            
        </div>
    )
}


export default Enroll;