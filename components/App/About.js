import React from 'react'
import { Provider } from 'react-redux';
import Hero from './../Hero/Hero';
import allReducer from './../../store/index';
import { createStore } from 'redux';
import Nav from '../Nav/Nav'
import About from './../About/About';

const store = createStore(allReducer)
const AboutCom = () => {
    
    return (
        <React.Fragment>
            <Provider store={store}>
                <About />
            </Provider>
        </React.Fragment>
    )
}

export default AboutCom;