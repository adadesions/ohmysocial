import React from 'react';

let click = 0;
export default class PostDetail extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });
  }

  render() {
    return(
      <div className="post-detail">
        {/*Image*/}
        <img className="img-post-detail materialboxed" src="/images/posts/test.jpg"/>
        {/*Embed*/}
        {/*<iframe className="videos-post-detail" width="680" height="382" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowFullScreen></iframe>*/}
        {/*Quote*/}
        {/*<h4 className="quote">"Test Quote"</h4>*/}
        {/*Message*/}
        {/*<span className="message">test</span>*/}
        <div className="row social-bar">
          <div className="col l8 title-post">
            <h4>test</h4>
          </div>
          <div className="col l4 function-post">
            <div className="function-favorite">
              <img src="/images/posts/icon/favorite.png"/>
              <span>Favorite</span>
            </div>
            <div className="function-share">
              <img className="img-share" src="/images/posts/icon/share.png"/>
              <span className="span-share">Share</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
