import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { firebaseApp } from './firebase';
import history from './components/history';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('user has signed up: ', user);
        history.push('/');
        //return <Redirect to="/" push={true} />
    } else {
        console.log('user is not logged in');
        history.push('/signin');
    }
})

ReactDOM.render(
    <Router history={history}>
        <div className="App">
            <Route exact path='/' component={App} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
        </div>
    </Router>, document.getElementById('root')
)