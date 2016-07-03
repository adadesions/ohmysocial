import React, { PropTypes } from 'react';

// Components
import PostBody from './posts/PostBody.jsx';
import CommentItems from './comments/CommentItem.jsx';

export default class PostItem extends React.Component {

  onClickMenuPost() {
    $('.menu-post').toggleClass('menu-post-active');
    $('.menu-list').toggleClass('menu-list-active');
  }

  render() {
    return(
      <div className="post-layout">
        <img className="responsive-img circle avatar" src="/images/posts/avatar.jpg"/>
        <div className="post-item">
          <div className="post row">
            <div className="col l8 s12">
              <PostBody post={this.props.postObj} />
            </div>
            <div className="col l4 s12">
              <CommentItems />
            </div>
          </div>
        </div>
        <div onClick={this.onClickMenuPost} className="menu-post">
          <img src="/images/posts/icon/slide-btn.png"/>
        </div>
        <div className="menu-list">
          <img src="/images/posts/icon/send.png"/>
          <img src="/images/posts/icon/share.png"/>
          <img src="/images/posts/icon/load.png"/>
          <img src="/images/posts/icon/report.png"/>
        </div>
      </div>
    )
  }
}

PostItem.propTypes = {
  postObj: PropTypes.object.isRequired,
}
