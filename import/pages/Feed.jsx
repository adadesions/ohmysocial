import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Components
import PostItems from '../ui/components/PostItem.jsx';
import PostBox from '../ui/components/PostBox.jsx';

// Collections
import Posts from '../apis/collections/Posts.js';

class Feed extends React.Component {

  renderPostItem(postsSet) {
    return postsSet.map((post) => {
      return <PostItems key={post._id} postObj={post} />
    });
  }

  render() {
    return(
      <div className="row">
        <PostBox />
        <div className="col l12 feed">
          { this.renderPostItem(this.props.postsSet) }
          {/*<PostItems postType="image"/>
          <PostItems postType="embed"/>
          <PostItems postType="text"/>
          <PostItems postType="quote"/>*/}
        </div>
      </div>
    )
  }
}

export default createContainer(() => {
  const isDBReady = Meteor.subscribe('newsfeedPost').ready();
  let postsSet = [];
  if( isDBReady ) {
    postsSet = Posts.find().fetch();    
  }
  return {
    postsSet,
  }
}, Feed);
