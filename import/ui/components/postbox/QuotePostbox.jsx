import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class QuotePostbox extends React.Component {
  onClickQuotePostPublish() {
    const postContent = this.refs.postQuote.value;
    const userId = Meteor.userId();
    const postType = 'quote';
    const publishedAt = new Date();
    const postObj = {
      userId,
      postType,
      postContent,
      publishedAt
    }

    Meteor.call('saveToDB', postObj);
  }

  render() {
    return(
      <div className="quote-post-box">
        <div className="input-field col l12">
          <textarea ref="postQuote" id="post-text" className="materialize-textarea"></textarea>
          <label for="post-text">Quote</label>
        </div>
        <div
          className="btn-post-box col l12"
          onClick={ () => this.onClickQuotePostPublish() }
        >
          <a className="waves-effect waves-light btn">Publish</a>
        </div>
      </div>
    )
  }
}
