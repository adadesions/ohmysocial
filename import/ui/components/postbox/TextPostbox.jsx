import React from 'react';
import { Meteor } from 'meteor/meteor';


export default class TextPostbox extends React.Component {
  constructor(props) {
    super(props);
    this.onClickPostPublish = this.onClickPostPublish.bind(this);
  }

  onClickPostPublish() {
    const postContent = this.refs.postContent.value;
    const userId = Meteor.userId();
    const publishedAt = new Date();
    const postType = 'text';

    const postObj = {
      userId,
      postContent,
      postType,
      publishedAt
    }
    Meteor.call('saveToDB',postObj, (err) => {
      if(err) {
        console.log(`ERROR on saveToDB : ${err}`);
      }
      else {
        console.log('Saved to DB');
      }
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
            onClick={ this.onClickPostPublish }
            className="waves-effect waves-light btn"
          >Publish</a>
        </div>
      </div>
    )
  }
}
