import React, { Component } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

import withRedux from "next-redux-wrapper";

import { connect } from 'react-redux';
import {decrementCounter, incrementCounter} from "../../redux/actions/counterActions";

const ReduxTest = props => {
    // console.log('?');
    console.log(props.data);
    const [ counter, setCounter ] = useState(0);
    const incrementCounter = () => {
        setCounter(prev => ++prev);
    };
    const decrementCounter = () => {
        setCounter(prev => --prev);
    };
    return (
        <>
            <Button onClick={incrementCounter}>Increment</Button>
            <Button onClick={decrementCounter}>Decrement</Button>
            <h1>{counter}</h1>
        </>
    )
};

ReduxTest.getInitialProps = async (ctx) => {
    // console.log(Object.keys(ctx));
    // console.log('here');
    return {
        data: 1
    }
};

export default ReduxTest;

// const mapStateToProps = state => ({
//     counter: state.counter.value
// });
//
// const mapDispatchToProps = {
//     incrementCounter: incrementCounter,
//     decrementCounter: decrementCounter,
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);
