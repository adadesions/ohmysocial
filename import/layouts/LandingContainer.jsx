import React from 'react';

// Components
import NavigatorLanding from '../ui/components/navigator/NavigatorLanding.jsx';

export default class LandingContainer extends React.Component {
  render() {
    return(
      <div className="landing-container">
        <NavigatorLanding />
        {this.props.content}
      </div>
    )
  }
}
