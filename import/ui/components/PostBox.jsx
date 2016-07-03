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
  }

  componentDidMount() {
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });

    const type = this.state.type;
    switch (type) {
      case 'text':
        $('.menu-text').addClass('active')
        break;
      case 'embed':
        $('.menu-embed').addClass('active')
        break;
      case 'quote':
        $('.menu-quote').addClass('active')
        break;
      case 'img':
        $('.menu-img').addClass('active')
        break;
      default:
        $('.menu-text').addClass('active')
    }
  }

  onClickPostTypes(inputType) {
    const type = inputType;
    this.setState({
      type,
    })
  }

  renderBox() {
    const postType = this.state.type;
    switch( postType ) {
      case 'text': return <TextPostbox />
        break;
      case 'embed': return <EmbedPostbox />
        break;
      case 'quote': return <QuotePostbox />
        break;
      case 'img': return <ImagePostbox />
        break;
      default: return <TextPostbox />
    }
  }

  render() {
    return(
      <div className="post-box">
        <div className="row post-box-body">
          <div className="col l12">
            { this.renderBox() }
          </div>
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3"><a onClick={() => this.onClickPostTypes('text')} className="menu-text active" href="">text</a></li>
              <li className="tab col s3"><a onClick={() => this.onClickPostTypes('img')} className="menu-img" href="">image</a></li>
              <li className="tab col s3"><a onClick={() => this.onClickPostTypes('embed')} className="menu-embed" href="">embed</a></li>
              <li className="tab col s3"><a onClick={() => this.onClickPostTypes('quote')} className="menu-quote" href="">quote</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
