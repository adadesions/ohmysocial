import React from 'react';

export default class QuotePostbox extends React.Component {

  componentDidMount() {

  }

  render() {
    return(
      <div className="quote-post-box">
        <div className="input-field col l12">
          <textarea id="post-text" className="materialize-textarea"></textarea>
          <label for="post-text">Quote</label>
        </div>
        <div className="btn-post-box col l12">
          <a className="waves-effect waves-light btn">Post !</a>
        </div>
      </div>
    )
  }
}
