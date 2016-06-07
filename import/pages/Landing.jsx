import React from 'react';

export default class Landing extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });

    $('.datepicker').pickadate({
       selectMonths: true, // Creates a dropdown to control month
       selectYears: 15 // Creates a dropdown of 15 years to control year
     });

    $(document).ready(function() {
      $('select').material_select();
    });
  }

  render() {
    return(
      <div className="landing-page row">
        <div className="col l6 left">
          <div className="content-left">
            <img className="materialboxed" src="/images/landing/news1.jpg"/>
          </div>
        </div>
        <div className="col l6 right">
          <h4>Sign Up</h4>
          <div className="form-signup">
            <div className="input-field col l6">
              <input placeholder="First name" id="firstname" type="text" className="validate"/>
            </div>
            <div className="input-field col l6">
              <input placeholder="Password" id="surname" type="text" className="validate"/>
            </div>
            <div className="input-field col l12">
              <input placeholder="Email" id="email" type="email" className="validate"/>
            </div>
            <div className="input-field col l12">
              <input placeholder="Re-Email" id="reemail" type="email" className="validate"/>
            </div>
            <div className="input-field col l12">
              <input placeholder="Password" id="password-signup" type="password" className="validate"/>
            </div>
            <div className="input-field col l12">
              <input type="date" id="birthday" className="datepicker"/>
              <label for="birthday">birthday</label>
            </div>
            <div className="input-field col l12 gender-select">
              <select defaultValue="0">
                <option value="0" disabled>Choose your option</option>
                <option value="1">male</option>
                <option value="2">Female</option>
              </select>
              <label>Gender</label>
            </div>
            <div className="input-field col l12 btn-signup">
              <a className="waves-effect waves-light btn green">Let's Rock !!</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
