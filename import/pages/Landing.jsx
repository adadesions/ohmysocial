import React from 'react';

// Components
import SignUp from '../ui/components/SignUp.jsx';

export default class Landing extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      $('select').material_select();
    });

    $('.datepicker').pickadate({
       selectMonths: true, // Creates a dropdown to control month
       selectYears: 15 // Creates a dropdown of 15 years to control year
     });
  }

  render() {
    return(
      <div className="landing-page row">
        <div className="col l6 s12 left">
          <div className="content-left">
            <img src="/images/landing/news1.jpg"/>
          </div>
        </div>
        <div className="col l6 s12 right">
          <SignUp />
        </div>
      </div>
    )
  }
}
