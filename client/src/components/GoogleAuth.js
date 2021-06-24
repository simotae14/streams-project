import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = {
    isSignedIn: null
  };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '474654159211-t37og3sumh8c0l4d87qd1nu74cgbinne.apps.googleusercontent.com',
        scope: 'email'
      })
      .then(() => {
        // reference to auth
        this.auth = window.gapi.auth2.getAuthInstance();
        // update state with auth object login or not
        this.setState({
          isSignedIn: this.auth.isSignedIn.get()
        });
      });
    });
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signed in</div>;
    } else {
      return <div>I am not signed in</div>;
    }
  }
  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  }
}

export default GoogleAuth;