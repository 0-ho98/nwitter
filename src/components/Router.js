import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn ? <>
                <Route exact path="/">
                    <Home />
                </Route>
            </>: <><Route exact path="/">
                    <Auth />
                </Route></>}
        </Router>
    )
}

export default AppRouter;