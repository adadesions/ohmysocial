import React from 'react';

// Components
import SearchItems from '../ui/components/SearchItems.jsx';

export default class Search extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
       $('.collapsible').collapsible({
         accordion : false
       });
     });
  }

  render() {
    return(
      <div className="">
        <ul className="collapsible popout search-list" data-collapsible="accordion">
          <SearchItems />
        </ul>
      </div>
    )
  }
}
