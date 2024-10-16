import React, { useEffect, useState } from 'react';
import {Header,Footer,Home} from './components/Index'
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import { store } from './components/redux/store';

  
const App = () => {

    return (
        
            <>
            <Provider store={store}>
            <Header />
            <Outlet></Outlet>
            <Footer />
            </Provider>
            </>
        
    );
};

export default App;
