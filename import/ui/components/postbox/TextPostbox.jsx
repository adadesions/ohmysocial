import React from 'react';
import { Meteor } from 'meteor/meteor';


export default class TextPostbox extends React.Component {
  constructor(props) {
    super(props);

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
          >Publish</a>
        </div>
      </div>
    )
  }
}
