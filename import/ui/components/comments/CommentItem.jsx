import React from 'react';

// Components
import CommentDetail from './CommentBody.jsx'

export default class CommentItem extends React.Component {
  render() {
    return(
      <div className="comment-layout">
        <div className="write-post">
          <img className="responsive-img circle avatar-comment" src="/images/posts/avatar.jpg"/>
            <div className="input-field col l12">
              <input id="first_name" type="text" className="validate"/>
              <label for="first_name">How was it?</label>
            </div>
        </div>
        <div className="comment-item">
          <CommentDetail />
          <CommentDetail />
        </div>
      </div>
    )
  }
}
