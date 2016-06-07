import React from 'react';

// Components
import PostDetail from './PostDetail.jsx';
import CommentItems from '../comments/CommentItems.jsx';

export default class PostItems extends React.Component {

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
            <div className="col l8">
              <PostDetail />
            </div>
            <div className="col l4">
              <CommentItems />
            </div>
          </div>
        </div>
        <div onClick={this.onClickMenuPost} className="menu-post">

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
