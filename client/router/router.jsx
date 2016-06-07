import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Layouts
import Container from '../../import/layouts/Container.jsx';

// Components
import Feed from '../../import/pages/Feed.jsx';

const mainRouter = FlowRouter.group({
  name: 'mainpage',
});

mainRouter.route('/', {
  name: 'feed',
  action() {
    mount(Container, {
      content: <Feed />,
    });
  },
});
