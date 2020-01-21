import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Header from './components/header/header.component'

import HomePage from './pages/homepage/homepage.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }
          // , () => {
          //   console.log(this.state)
          // }
          );
        });
        
      } else this.setState({currentUser: userAuth})

    }); 
  }

  componentWillUnmount() {
      this.unsubscribeFromAuth();
  }

  render() {
    return !this.state.currentUser ? (
      <Switch>
      <Route path='/signin' component={SignInAndSignUpPage} />
      <Redirect to='/signin'/>
    </Switch>
    ): (
      <div>
      <Header />
          <Switch>
            <Route exact path='/react-todo-app' component={HomePage} />
            <Redirect to='/react-todo-app'/>
          </Switch>
      </div>
    );
  }
 
}

export default App;
