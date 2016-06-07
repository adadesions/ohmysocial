import React, { PropTypes } from 'react';

let click = 0;
export default class PostBody extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });
  }

  postEmbed(source) {
    return (
      <iframe
        className="videos-post-detail"
        width="680"
        height="382"
        src={source}
        frameborder="0"
        allowFullScreen>
      </iframe>
    );
  }

  postImage(source) {
    return (
      <img
        className="img-post-detail materialboxed"
        src={source}
      />
  );
  }

  postText(source) {
    return (
      <span className="message">
        {source}
      </span>
    );
  }

  postQuote(source) {
    return (
      <h4 className="quote">
        {source}
      </h4>
    );
  }

  getRenderPostByType(type){
    switch(type) {
      case 'embed': return this.postEmbed("//www.youtube.com/embed/Q8TXgCzxEnw?rel=0");
            break;
      case 'image': return this.postImage("/images/posts/test.jpg");
            break;
      case 'text': return this.postText("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s");
            break;
      case 'quote': return this.postQuote("\"We're AdaCode, Living our life!\"");
    }
  }

  render() {
    return(
      <div className="post-detail">

        { this.getRenderPostByType(this.props.postType) }

        <div className="row social-bar">
          <div className="col l8 title-post">
            <h5>AdaCode International Space Station</h5>
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

PostBody.props = {
  postType: PropTypes.string.isRequired,
}
