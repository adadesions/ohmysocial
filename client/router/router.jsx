import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Layouts
import Container from '../../import/layouts/Container.jsx';
import LandingContainer from '../../import/layouts/LandingContainer.jsx';

// Components
import Feed from '../../import/pages/Feed.jsx';
import Landing from '../../import/pages/Landing.jsx';

const landingRouter = FlowRouter.group({
  name: 'landing',
});

const mainRouter = FlowRouter.group({
  name: 'mainpage',
});

landingRouter.route('/', {
  name: 'adasocial',
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
