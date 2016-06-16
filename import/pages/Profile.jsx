import React from 'react';

// Components
import PostItem from '../ui/components/PostItem.jsx';

export default class Profile extends React.Component {

  render() {
    return(
      <div className="profile">
        <div>
          <div className="cover-profile row z-depth-1">
            <div className="profile-detail">
              <h1>Ada Kaminkure</h1>
              <div className="history">
                <div><span><i className="material-icons">work</i>Co-founder/CEO at AdaCode.IO</span></div>
                <div><span><i className="material-icons">store</i>Studied Computer Science at Chulalongkorn University</span></div>
                <div><span><i className="material-icons">store</i>Went to ACN</span></div>
                <div><span><i className="material-icons">loop</i>Follow by </span></div>
              </div>
            </div>
          </div>
          <div className="img-profile">
            <img className="circle z-depth-1" src="/images/posts/avatar.jpg"/>
          </div>
        </div>
        <PostItem postType="image"/>
      </div>
    )
  }
}
