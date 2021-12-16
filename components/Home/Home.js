import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Home.module.css';
import Nav from '../Nav/Nav'

import Subscribe from './../Subscribe/Subscribe';
import Single from './../Single/Single';
import Connect from './../Connect/Connect';
import Footer from './../Footer/Footer';
import Sidebar from './../Sidebar/Sidebar';

const Home = () => {
    const activeSidebar = useSelector(state => state.sidebarReducer)
    return ( 
        <React.Fragment>
            <Nav />
            {activeSidebar && <Sidebar />}
            <Single page="Tec in every home" />
            <div className={styles.cont}>
                <h2>Tec in every home</h2>
            <p>Every child needs personalized education, this is the future of education and we’re shaping education into this to ignite passionate curiosity for learning for our TEC students. Every child can have good success.Raphael O. Ajiboye</p>

            <p>We’re excited to help empower TEC parents and TEC students to be active, engaged partners in learning, offering new ways to personalize how schools teach and inspire today’s students</p>

            <p>Education has moved and we’re now in the future! Over the past 5 years, We have been in hundreds of homes, sitting down with parents, hearing them share the struggle their children go through and how school seems not to be meeting their children needs, especially a child’s specific need. With rich and averagely rich parents saying the same thing about their children struggles and how they need one on one attention, which no school can provide even if they’ve 5 students in a class, knowing every child learn at different pace and that the routine of “hiding curriculum” which make education passive and test focus require new approach</p>

            <p>Our mission is to ensure that we create pathways to good success for all our clients in all our services. We will strive to achieve this goal by; Providing our clients with quality services We would be mindful of the well-being of our customers and staffs treating each and every one with dignity and respect. </p>
            </div>
            
            <Subscribe />
            <Connect />
            <Footer />
        </React.Fragment>
    )
}

export default Home;
