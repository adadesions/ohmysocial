import React from 'react';

export default class ImagePostbox extends React.Component {

  componentDidMount() {

  }

  render() {
    return(
      <div className="img-post-box">
        <div className="input-field col l12">
          <textarea id="post-text" className="materialize-textarea"></textarea>
          <label for="post-text">Post Description</label>
        </div>
        <div className="file-field input-field col l6">
          <div className="btn">
            <span>File</span>
            <input type="file"/>
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text"/>
          </div>
        </div>
        <div className="input-field col l6">
          <input id="title-img" type="text" className="validate"/>
          <label for="title">Title</label>
        </div>
        <div className="btn-post-box col l12">
          <a className="waves-effect waves-light btn">Post !</a>
        </div>
      </div>
    )
  }
}
