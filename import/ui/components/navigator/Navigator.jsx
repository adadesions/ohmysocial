import React from 'react';

export default class Navigator extends React.Component {

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
      <div className="navigator">
        <div className="logo">
          <img src="/images/posts/icon/logo.png"/>
        </div>
        <div className="menu">
          <div className="list">
            <div className="input-field">
              <input id="last_name" type="text"/>
            </div>
            <img src="/images/posts/icon/find.png"/>
            <img src="/images/posts/icon/discov.png"/>
            <img src="/images/posts/icon/noti.png"/>
            <img src="/images/posts/icon/profile.png"/>
          </div>
        </div>
      </div>
    )
  }
}
