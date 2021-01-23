import React from 'react';

class BreweryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBreweries();
  }


  render() {
    const breweryIndexItem = this.props.breweries.map( brewery => {
      return (
        <li className="brewery-item-container">
          <BreweryIndexItem key={brewery.id} brewery={brewery}/>
        </li>
      )
    })

    return (
      <div className="brewery-index-container">
        <ul className="brewery-index">

        </ul>
      </div>
    )
  }
}

export default BreweryIndex;