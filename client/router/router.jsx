import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

// Layouts
import LandingContainer from '../../import/layouts/LandingContainer.jsx';

// Components
import Landing from '../../import/pages/Landing.jsx';

const landingRouter = FlowRouter.group({
  name: 'landing',
});


landingRouter.route('/', {
  name: 'root',
  action() {
    mount(LandingContainer, {
      content: <Landing />,
    });
  },
});
