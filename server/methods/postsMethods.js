// Core
import { Meteor } from 'meteor/meteor';

// Collections
import Posts from '../../import/apis/collections/Posts.js';

Meteor.methods({
  saveToDB(postObj) {
    Posts.insert(postObj);
  }
})
