import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import MyRegister from './screens/myRegister';
import MainScreen from './screens/main/';

export class Mints extends React.Component {

    render() {
        return this.props.hasLoggedIn ? <MainScreen /> : <MyRegister />
    }
}

export default compose(
    connect(({
        user: { data: { hasLoggedIn } }
    }) => ({
        hasLoggedIn
    }))
)(Mints);