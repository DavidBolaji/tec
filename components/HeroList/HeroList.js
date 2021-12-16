import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroList.module.css';
import Back from '../../assets/images/back.png';
import Next from '../../assets/images/next.png';
import { useDispatch } from 'react-redux';
import { next,prev } from './../../store/themeAction';


const HeroList = (props) => {
    const dispatch = useDispatch()
    const handleClick = (param) => {
        if(param === 'NEXT') {
            dispatch(next());
        } else {
            dispatch(prev());
        }
    }
    return (
        <div className={styles.carou} id={props.id}>
            <Image src={props.image} className={styles.drop} />
            
            <div className={styles.cont}>
                <h2>{props.title}</h2>
                <h4>{props.text}</h4>
                <button className={styles.btn}>
                    <Link href={props.page}>LEARN MORE</Link>
                </button>
                
            </div>
            <div className={styles.controls}>
                <Image src={Back} className={styles.left} alt="left-arrow" onClick={()=> handleClick('prev')}/>
                <Image src={Next}  className={styles.right} alt="right-arrow" onClick={() => handleClick('NEXT')} />
            </div>
          
        </div>
    )
}

export default HeroList;
