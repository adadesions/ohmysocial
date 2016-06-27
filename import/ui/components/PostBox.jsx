import React from 'react';

// components
import ImagePostbox from './postbox/ImagePostbox.jsx';
import TextPostbox from './postbox/TextPostbox.jsx';
import EmbedPostbox from './postbox/EmbedPostbox.jsx';
import QuotePostbox from './postbox/QuotePostbox.jsx';

export default class PostBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
    }
    this.onClickImage = this.onClickImage.bind(this);
    this.onClickEmbed = this.onClickEmbed.bind(this);
    this.onClickQuote = this.onClickQuote.bind(this);
    this.onClickText = this.onClickText.bind(this);
    this.renderBox = this.renderBox.bind(this);
  }

  componentDidMount() {
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });

    if(this.state.type == "text"){
      $('.menu-text').addClass('active')
    }
    else if (this.state.type == "embed") {
      $('.menu-embed').addClass('active')
    }
    else if (this.state.type == "quote") {
      $('.menu-quote').addClass('active')
    }
    else {
      $('.menu-img').addClass('active')
    }
  }

  onClickImage() {
    const type = "img";
    this.setState({
      type: type,
    })
  }

  onClickEmbed() {
    const type = "embed";
    this.setState({
      type: type,
    })
  }

  onClickQuote() {
    const type = "quote";
    this.setState({
      type: type,
    })
  }

  onClickText() {
    const type = "text";
    this.setState({
      type: type,
    })
  }

  renderBox() {
    if(this.state.type == "text"){
      return <TextPostbox />
    }
    else if (this.state.type == "embed") {
      return <EmbedPostbox />
    }
    else if (this.state.type == "quote") {
      return <QuotePostbox />
    }
    else {
      return <ImagePostbox />
    }

  }

  render() {
    return(
      <div className="post-box">
        <div className="row post-box-body">
          <div className="col l12">
            {this.renderBox()}
          </div>
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3"><a onClick={this.onClickImage} className="menu-img active" href="">image</a></li>
              <li className="tab col s3"><a onClick={this.onClickEmbed} className="menu-embed" href="">embed</a></li>
              <li className="tab col s3"><a onClick={this.onClickText} className="menu-text" href="">text</a></li>
              <li className="tab col s3"><a onClick={this.onClickQuote} className="menu-quote" href="">quote</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
