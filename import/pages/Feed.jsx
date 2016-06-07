import React from 'react';

// Components
import PostItems from '../ui/components/PostItem.jsx';

export default class Feed extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col l12 feed">
          <PostItems postType="image"/>
          <PostItems postType="embed"/>
          <PostItems postType="text"/>
          <PostItems postType="quote"/>
        </div>
      </div>
    )
  }
}
