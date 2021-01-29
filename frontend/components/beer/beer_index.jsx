import React from 'react';
import BeerIndexItem from './beer_index_item';
import { Link } from 'react-router-dom';

class BeerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBeers()
  }

  render() {
    const beerIndexItem = this.props.beers.map( beer => {
      return (
        <li key={beer.beer_name} className="beer-item-container">
          <BeerIndexItem
            key={beer.id}
            beer={beer}
            beerId={beer.id}
            openModal={this.props.openModal}  
          />
        </li>
      )
    })

    return (
      <div className="beer-index-container">
        <div className="beer-index-title">All Beers</div>
        <div className="beer-index-tags">
          <Link to='/beers' className="beers-tag tag">Beers</Link>
          <Link to='/breweries' className="breweries-tag tag">Breweries</Link>
        </div>
        <div className="beer-index-p-container">
          <p className="beer-index-p">The list shows the top beers, based on our weighted average formula, which effectively rates all beers against each-other. A beer must have 150 ratings or more to qualify for this list. For more information on our rating system, please view our ratings explainer.</p>
        </div>
        <ul className="beer-index">
          {beerIndexItem}
        </ul>
      </div>
    )
    // if (!this.props.beers) {
    //   return (
    //     <img className="loading" src={window.loader}/>
    //   )
    // } else {
    // }
  }
}

export default BeerIndex;