
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../../pages/home/Home'
import { RouterParent } from './Style'
import Navbar from '../../../components/Navbar'
import SideNav from '../../../components/SideNav'
import Booking from '../../pages/booking/Booking'

import NotFound from '../../pages/not-found/NotFound'

function Router() {
    const [cars, setCars] = useState();
    const [togNav, setTogNav] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/cars')
            .then((response) => response.json())
            .then((data) => setCars(data));
    }, [])
    return (
        <BrowserRouter>
            <RouterParent>
                <Navbar setTogNav={setTogNav} togNav={togNav} />
                <SideNav togNav={togNav} />
                <Switch>
                    <Route exact path='/dashboard'><Home cars={cars?.slice(0, 3)} /></Route>
                    <Route path='/booking'><Booking cars={cars} /></Route>
                    <Route path='*'><NotFound /></Route>
                </Switch>
            </RouterParent>
        </BrowserRouter>
    )
}

export default Router
