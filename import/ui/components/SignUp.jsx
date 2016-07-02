import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class SignUp extends React.Component{
  constructor() {
    super();
    this.onclickSignUp = this.onclickSignUp.bind(this);
  }

  onclickSignUp() {
    const firstName = this.refs.firstName.value;
    const lastName  = this.refs.lastName.value;
    const email     = this.refs.email.value;
    const password  = this.refs.password.value;
    const birthday  = this.refs.birthday.value;
    const gender    = this.refs.gender.value;

    const userObj = {
      firstName,
      lastName,
      email,
      password,
      birthday,
      gender
    }

    console.log(userObj);

  }

  render() {
    return (
      <section>
        <h4>Sign Up</h4>
        <div className="form-signup">
          <div className="input-field col l6 s12">
            <input ref="firstName" placeholder="First name" id="firstname" type="text" className="validate"/>
          </div>
          <div className="input-field col l6 s12">
            <input ref="lastName" placeholder="Last name" id="surname" type="text" className="validate"/>
          </div>
          <div className="input-field col l12 s12">
            <input ref="email" placeholder="Email" id="email" type="email" className="validate"/>
          </div>
          <div className="input-field col l12 s12">
            <input ref="password" placeholder="Password" id="password-signup" type="password" className="validate"/>
          </div>
          <div className="input-field col l12 s12">
            <input ref="birthday" type="date" id="birthday" className="datepicker"/>
            <label for="birthday">Birthday</label>
          </div>
          <div className="input-field col l12 s12 gender-select">
            <select ref="gender" defaultValue="0">
              <option value="0" disabled>Choose your option</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label>Gender</label>
          </div>
          <div onClick={ this.onclickSignUp } className="input-field col l12 s12 btn-signup">
            <a className="waves-effect waves-light btn green">Let's Rock !!</a>
          </div>
        </div>
      </section>
    );
  }
}
