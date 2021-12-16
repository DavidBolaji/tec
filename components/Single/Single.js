import React from 'react'
import Image from 'next/image';
import HeroList from '../HeroList/HeroList';
import Home from '../../assets/images/home.webp';
import styles from './Single.module.css';




const Single = (props) => {
  
    return <div className={styles.carou} >
            <div className={styles.cont}>
                <h2>{props.page}</h2>
            </div>
        </div>
}

export default Single

