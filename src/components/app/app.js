import React from 'react';
import { connect } from 'react-redux';
import WithService from '../hoc';
import { testError } from '../../actions';



const App = (props) => {
    try {
        throw new Error('Test error');
    }
    catch (e) {
        props.testError();
    }

    console.log(props);

    return 'Hello, World!';
}

const mapStateToProps = (state) => {
    return {
        error: state.error
    }
}

const mapDispatchToProps = {
    testError,
}


export default WithService()(connect(mapStateToProps, mapDispatchToProps)(App));
