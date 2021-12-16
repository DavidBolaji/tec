import React from 'react'
import { Provider } from 'react-redux';
import Hero from './../Hero/Hero';
import allReducer from './../../store/index';
import { createStore } from 'redux';
import Wrapper from './../wrapper/Wrapper';


const store = createStore(allReducer)
const App = () => {
    
    return (
        <React.Fragment>
            <Provider store={store}>
                <Wrapper />
            </Provider>
        </React.Fragment>
    )
}

export default App
