import React from 'react'
import { Provider } from 'react-redux';
import Hero from './../Hero/Hero';
import allReducer from './../../store/index';
import { createStore } from 'redux';
import Nav from '../Nav/Nav'
import Home from './../Home/Home';


const store = createStore(allReducer)
const HomeCom = () => {
    
    return (
        <React.Fragment>
            <Provider store={store}>
                <Home />
            </Provider>
        </React.Fragment>
    )
}

export default HomeCom;
