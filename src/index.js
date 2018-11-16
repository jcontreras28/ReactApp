import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import { firebaseApp } from './firebase';
import history from './components/history';
import reducer from './reducers';
import { logUser } from './actions';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('user has signed up: ', user);
        const { email } = user;
        store.dispatch(logUser(email));
        history.push('/');
        //return <Redirect to="/" push={true} />
    } else {
        console.log('user is not logged in');
        history.push('/signin');
    }
})

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div className="App">
                <Route exact path='/' component={App} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
            </div>
        </Router>
    </Provider>, document.getElementById('root')
)