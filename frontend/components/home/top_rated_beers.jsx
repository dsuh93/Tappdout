import React from 'react';

class TopRatedBeers extends React.Component {
  constructor(props) {
    super(props);

  }

  mapTopBeersByRating() {
    const ratings = this.props.checkins.map ((checkin, i) => {
      ratings.push(checkin.rating)
    });
    let sorted = ratings.sort().reverse();
    const topRatedBeers = [];
    [5, 5,5 ,5 ,5, 5,4,3,2,1]
    while (sorted.length >= 5 && topRatedBeers.length <= 5) {
      let checkins = Object.values(this.props.checkins);
      for (let i = 0; i < checkins.length; i++) {
        for (let j = 0; j < sorted.length; j++) {
          if (checkins[i].rating === sorted[j]) {
            topRatedBeers.push(
              <li>
                <img src={window.defBeer}/>
                <div>
                  <h3>{checkins[i].beer.beer_name}</h3>
                  <p>{checkins[i].brewery}</p>
                </div>
              </li>
            )
          }
          break
        }
      }
    }
    return topRatedBeers;
  }

  render() {
    return (
      {mapTopBeersByRating()}
    )
  }
}

export default TopRatedBeers;