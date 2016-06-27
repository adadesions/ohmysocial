import React from 'react';

export default class TextPostbox extends React.Component {

  componentDidMount() {

  }

  render() {
    return(
      <div className="text-post-box">
        <div className="input-field col l12">
          <textarea id="post-text" className="materialize-textarea"></textarea>
          <label for="post-text">Text</label>
        </div>
        <div className="btn-post-box col l12">
          <a className="waves-effect waves-light btn">Post !</a>
        </div>
      </div>
    )
  }
}
