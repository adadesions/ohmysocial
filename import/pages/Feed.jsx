import React from 'react';

// Components
import PostItems from '../ui/components/posts/PostItems.jsx';

export default class Feed extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col l12 feed">
          <PostItems />
        </div>
      </div>
    )
  }
}
