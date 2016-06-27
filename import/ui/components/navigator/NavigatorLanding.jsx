import React from 'react';

// Components
import SignIn from '../SignIn.jsx';

export default class NavigatorLanding extends React.Component {

  componentDidMount() {
    $(document).scroll(function(){
      $('.navigator').addClass('navigator-on-scroll');
      $('.feed').addClass('feed-scroll');
    });

    $(document).scroll(function() {
      if ($(this).scrollTop() === 0) { // this refers to window
        $('.navigator').removeClass('navigator-on-scroll');
        $('.feed').removeClass('feed-scroll');
      }
    });
  }

  render() {
    return(
      <div className="navigator-landing">
        <div className="logo">
          <img src="/images/posts/icon/logo.png"/>
        </div>
        <SignIn />
      </div>
    )
  }
}
