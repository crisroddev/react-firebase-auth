import React, { Component} from 'react';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey:"AIzaSyCqIEhwZt9dJck14H8vsMsp-zltycjFW1s",
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
        <span>
          <div>Signed In!</div>
          <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
          <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          <img
            src={firebase.auth().currentUser.photoURL}
          />
        </span>
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
