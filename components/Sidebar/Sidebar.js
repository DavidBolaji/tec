import React from 'react';
import styles from './Sidebar.module.css';
import Link from 'next/link';
import { useDispatch,useSelector } from 'react-redux';
import { tog } from './../../store/themeAction';

const Sidebar = () => {
    const dispatch = useDispatch();
    const active = useSelector(state => state.sidebarReducer)
   
    const handleClick = () => {
        dispatch(tog())
    }



    return (
        <div className={styles.sidebar} style={{width: active ? '50vw' : '0vw'}} >
        <div className={styles.overlay} onClick={handleClick}></div>
            <ul>
                <li  onClick={handleClick}><Link href="/">Home</Link></li>
                <li  onClick={handleClick}><Link href="/about">About Us</Link></li>
                <li  onClick={handleClick}><Link href="/contact">Contact Us</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar
