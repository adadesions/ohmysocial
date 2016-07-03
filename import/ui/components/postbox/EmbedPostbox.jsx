import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class EmbedPostbox extends React.Component {

  onClickEmbedPublish() {
    const userId = Meteor.userId();
    const postContent = this.refs.postContent.value;
    const linkUrl = this.refs.linkUrl.value;
    const title = this.refs.title.value;
    const postType = 'embed';
    const publishedAt = new Date();
    const postObj = {
      userId,
      postContent,
      linkUrl,
      title,
      postType,
      publishedAt
    }
    // console.log(postObj);
    Meteor.call('saveToDB', postObj);
  }

  render() {
    return(
      <div className="embed-post-box">
        <div className="input-field col l12">
          <textarea ref="postContent" id="post-text" className="materialize-textarea"></textarea>
          <label for="post-text">Post Description</label>
        </div>
        <div className="file-field input-field col l6">
          <div className="btn">
            <span>Link</span>
          </div>
          <div className="file-path-wrapper">
            <input ref="linkUrl" className="file-path validate" type="text"/>
          </div>
        </div>
        <div className="input-field col l6">
          <input ref="title" id="title-img" type="text" className="validate"/>
          <label for="title">Title</label>
        </div>
        <div
          onClick={ () => this.onClickEmbedPublish() }
          className="btn-post-box col l12"
        >
          <a className="waves-effect waves-light btn">Publish</a>
        </div>
      </div>
    )
  }
}
