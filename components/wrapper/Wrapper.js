import React from 'react';
import Hero from './../Hero/Hero';
import Nav from '../Nav/Nav'
import Question from './../Question/Question';
import Comment from './../Coment/Comment';
import Subscribe from './../Subscribe/Subscribe';
import Connect from './../Connect/Connect';
import Footer from './../Footer/Footer';
import Sidebar from './../Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import Enroll from './../Enroll/Enroll';


const Wrapper = () => {
    const activeSidebar = useSelector(state => state.sidebarReducer)
    return (
        <React.Fragment>
            <Nav />
            {activeSidebar && <Sidebar />}
            <Hero/>
            <Enroll />
            <Question />
            <Comment />
            <Connect />
            <Subscribe />
            <Footer />
        </React.Fragment>
    )
}

export default Wrapper
