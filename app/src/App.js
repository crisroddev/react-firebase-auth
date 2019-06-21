import React, { Component} from 'react';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey:"AIzaSyAqq-REtF1lO8r-ZAWnU577_Qs4q2_i_SM",
  authDomain: "fir-auth-8691e.firebaseapp.com"
})

class App extends Component {
  state={
    isSignedIn: false
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged( user => {
      this.setState({ isSignedIn: !!user})
    })
  }

  render () {
    return(
      <div className="App">
        {this.state.isSignedIn ? (
          <div>Signed In</div>
        ) : (
          <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default App;
