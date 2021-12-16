import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Contact.module.css';
import Nav from '../Nav/Nav';

import Subscribe from './../Subscribe/Subscribe';
import Single from './../Single/Single';
import Connect from './../Connect/Connect';
import Footer from './../Footer/Footer';
import Sidebar from './../Sidebar/Sidebar';

const Contact = () => {
    const activeSidebar = useSelector(state => state.sidebarReducer)
    return ( 
        <React.Fragment>
            <Nav />
            {activeSidebar && <Sidebar />}
            <Single page="Contact Us" />
            <div className={styles.cont}>
                <h2>Contact</h2>
                <p>Call: +2347086513100</p>
                <p>Email: info@tecworld.com.ng</p>
                <p>Address: Ogolowa, behind Chicken republic, osun State</p>
            </div>
            
            <Subscribe />
            <Connect />
            <Footer />
        </React.Fragment>
    )
}

export default Contact;
