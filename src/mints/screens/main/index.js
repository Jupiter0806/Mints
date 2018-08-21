import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';

import { PrimaryPage, SecondaryPage } from './pages';

export default class MainScreen extends React.Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' name='primary' component={PrimaryPage} />
                    <Route path='/secondary' name='secondary' component={SecondaryPage} />
                </Switch>
            </HashRouter>
            
        )
    }
}