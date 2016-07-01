import React from 'react';
import { Meteor } from 'meteor/meteor';


export default class TextPostbox extends React.Component {
  constructor(props) {
    super(props);

  }

  onClickPublish() {
    let postContent = this.refs.postContent.value;
    const userId = Meteor.userId();
    const postType = 'text';
    const publishedAt = new Date();
    const postObj = {
      userId,
      postType,
      postContent,
      publishedAt,
    }
    Meteor.call('savePost', postObj, () => {
      this.refs.postContent.value  = '';
    });
  }

  render() {
    return(
      <div className="text-post-box">
        <div className="input-field col l12">
          <textarea ref='postContent' id="post-text" className="materialize-textarea"></textarea>
          <label for="post-text">Any things in your life...</label>
        </div>
        <div className="btn-post-box col l12">
          <a
            className="waves-effect waves-light btn"
            onClick={ () => this.onClickPublish() }
          >Publish</a>
        </div>
      </div>
    )
  }
}
