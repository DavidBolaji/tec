import React from 'react';
import styles from './Comment.module.css'
import Image from 'next/image';
import Child from '../../assets/images/testimonial.webp';

const Comment = () => {
    return (
        <div className={styles.comment}>
            <div className={styles.img}>
                <Image src={Child} alt="tec-child" className={styles.child} />
            </div>
            <div className={styles.text}>
                <h3>What Parents and Students are saying </h3>
                <p>Beyond the progress made academically, we have seen unbelievable improvements in Bria’s self-confidence and self-esteem. I think that the biggest gain that Bria has made this year is how she handles the unexpected. Tecworld Learning has provided a safe environment for Bria to further develop her coping skills for when things don’t go according to plan. Thank you so much for being such a positive influence on my daughter!</p>
            </div>
            
        </div>
    )
}

export default Comment
