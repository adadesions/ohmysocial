import React from 'react';

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
        <div className="menu">
          <div className="list">
            <div className="input-field col s6">
              <input placeholder="Username" id="username" type="text" className="validate"/>
            </div>
            <div className="input-field col s6">
              <input placeholder="Password" id="password" type="password" className="validate"/>
            </div>
            <div className="btn-login">
              <a className="btn-floating btn-large waves-effect waves-light green"><i className="material-icons">vpn_key</i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
