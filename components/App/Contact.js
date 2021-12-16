import React from 'react'
import { Provider } from 'react-redux';
import Hero from './../Hero/Hero';
import allReducer from './../../store/index';
import { createStore } from 'redux';
import Nav from '../Nav/Nav'
import Contact from './../Contact/Contact';

const store = createStore(allReducer)
const ContactCom = () => {
    
    return (
        <React.Fragment>
            <Provider store={store}>
                <Contact />
            </Provider>
        </React.Fragment>
    )
}

export default ContactCom;