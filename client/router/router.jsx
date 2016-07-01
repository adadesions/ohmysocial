import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Layouts
import Container from '../../import/layouts/Container.jsx';
import LandingContainer from '../../import/layouts/LandingContainer.jsx';

// Components
import Feed from '../../import/pages/Feed.jsx';
import Landing from '../../import/pages/Landing.jsx';
import Search from '../../import/pages/Search.jsx';
import Profile from '../../import/pages/Profile.jsx';

const landingRouter = FlowRouter.group({
  name: 'landing',
});

const mainRouter = FlowRouter.group({
  name: 'mainpage',
});

landingRouter.route('/', {
  name: 'root',
  action() {
    mount(LandingContainer, {
      content: <Landing />,
    });
  },
});

mainRouter.route('/feed', {
  name: 'feed',
  action() {
    mount(Container, {
      content: <Feed />,
    });
  },
});


mainRouter.route('/search', {
  name: 'search',
  action() {
    mount(Container, {
      content: <Search />,
    });
  },
});

mainRouter.route('/profile', {
  name: 'profile',
  action() {
    mount(Container, {
      content: <Profile />,
    });
  },
});
