import React, { Component } from 'react';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '474654159211-t37og3sumh8c0l4d87qd1nu74cgbinne.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  render() {
    return (
      <div>
        Gooogle Auth
      </div>
    );
  }
}

export default GoogleAuth;