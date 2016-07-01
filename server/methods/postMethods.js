import { Meteor } from 'meteor/meteor';

// Collections
import Posts from '../../import/apis/collections/posts.js';

Meteor.methods({
  savePost( postObj ) {
    Posts.insert(postObj);
  },
})
