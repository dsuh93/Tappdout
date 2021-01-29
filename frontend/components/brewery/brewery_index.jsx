import React from 'react';
import BreweryIndexItem from './brewery_index_item';
import { Link } from 'react-router-dom';

class BreweryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBreweries();
  }

  // averageRating() {
    
  // }

  render() {
    const breweryIndexItem = this.props.breweries.map( brewery => {
      return (
        <li key={brewery.brewery_name}className="brewery-item-container">
          <BreweryIndexItem key={brewery.id} brewery={brewery}/>
        </li>
      )
    })

    return (
      <div className="brewery-index-container">
        <div className="brewery-index-title">All Breweries</div>
        <div className="brewery-index-tags">
          <Link to='/beers' className="beers-tag tag">Beers</Link>
          <Link to='/breweries' className="breweries-tag tag">Breweries</Link>
        </div>
        <div className="brewery-index-p-container">
          <p className="brewery-index-p">The list shows the top breweries, based on our weighted average formula, which effectively rates all breweries against each-other and gives weight to their beers with higher rating count. A brewery must have at least 1,000 ratings and at least 5 beers in their portfolio to qualify for this list. For more information on our rating system, please view our ratings explainer.</p>
        </div>
        <ul className="brewery-index">
          {breweryIndexItem}
        </ul>
      </div>
    )
  }
}

export default BreweryIndex;