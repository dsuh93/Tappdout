import React from 'react';
import BeerIndexItem from './beer_index_item';

class BeerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchBeers()
  }

  render() {
    const beerIndexItem = this.props.beers.map( beer => {
      return (
        <li key={beer.beer_name} className="beer-item-container">
          <BeerIndexItem key={beer.id} beer={beer} />
        </li>
      )
    })

    return (
      <div className="beer-index-container">
        <ul className="beer-index">
          {beerIndexItem}
        </ul>
      </div>
    )
  }

}

export default BeerIndex;