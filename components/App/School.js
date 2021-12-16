import React from 'react'
import { Provider } from 'react-redux';
import Hero from './../Hero/Hero';
import allReducer from './../../store/index';
import { createStore } from 'redux';
import Nav from '../Nav/Nav'
import School from './../School/School';

const store = createStore(allReducer)
const SchoolCom = () => {
    
    return (
        <React.Fragment>
            <Provider store={store}>
                <School />
            </Provider>
        </React.Fragment>
    )
}

export default SchoolCom;