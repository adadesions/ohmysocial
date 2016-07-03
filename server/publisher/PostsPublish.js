import { Meteor } from 'meteor/meteor';

// Collection
import Posts from '../../import/apis/collections/Posts.js';

Meteor.publish('newsfeedPost', () => {
  return Posts.find();
});
