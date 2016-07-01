import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class SignIn extends React.Component {
  constructor() {
    super();
    this.onClickSignIn = this.onClickSignIn.bind(this);
  }

  componentDidMount() {
    const isUserLoggedIn = () => {
      if( Meteor.userId() ) {
        FlowRouter.go('feed');
      }
    }
    isUserLoggedIn();
  }

  onClickSignIn() {
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    const redirectToFeed = () => {
      if( Meteor.userId() ){
        FlowRouter.go('feed');
      }
      else {
        FlowRouter.go('root')
      }
    };
    // Login with Password
    Meteor.loginWithPassword(username, password, redirectToFeed());
  }

  render() {
    return (
      <div className="menu">
        <div className="list">
          <div className="input-field col s6">
            <input ref="username" placeholder="Username" id="username" type="text" className="validate"/>
          </div>
          <div className="input-field col s6">
            <input ref="password" placeholder="Password" id="password" type="password" className="validate"/>
          </div>
          <div onClick={ this.onClickSignIn } className="btn-login">
            <a className="btn-floating btn-large waves-effect waves-light green"><i className="material-icons">vpn_key</i></a>
          </div>
        </div>
      </div>
    )
  }
}
