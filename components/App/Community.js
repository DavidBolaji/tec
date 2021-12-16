import React from 'react'
import { Provider } from 'react-redux';
import Hero from './../Hero/Hero';
import allReducer from './../../store/index';
import { createStore } from 'redux';
import Nav from '../Nav/Nav'
import Community from './../Community/Community';

const store = createStore(allReducer)
const CommunityCom = () => {
    
    return (
        <React.Fragment>
            <Provider store={store}>
                <Community />
            </Provider>
        </React.Fragment>
    )
}

export default CommunityCom;