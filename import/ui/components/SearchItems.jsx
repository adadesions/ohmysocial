import React from 'react';

export default class SearchItems extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
       $('.collapsible').collapsible({
         accordion : false
       });
     });
  }

  render() {
    return(
      <li>
        <div className="collapsible-header"><i className="material-icons">search</i>First</div>
      </li>
    )
  }
}
