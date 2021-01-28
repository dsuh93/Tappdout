//capEmpty, capFQ, capHalf, capLQ, capFull
import React from 'react';

class Rating extends React.Component {
  constructor(props) {
    super(props);
  }

  displayRating() {
    const r = this.props.rating;
    let imageArray = [];
    for(let i = 1; i <= 5; i++) {
      if ( i <= r ) {
        imageArray.push( <img key={r + i} id="cap" src={window.capFull}/> )
      } else if ( r < i && i === Math.ceil(r)) {
        if ( r % 1 === 0.25) {
          imageArray.push( <img key={r + i} id="cap" src={window.capFQ}/> )
        } else if ( r % 1 === 0.5) {
          imageArray.push( <img key={r + i} id="cap" src={window.capHalf}/> )
        } else if ( r % 1 === 0.75) {
          imageArray.push( <img key={r + i} id="cap" src={window.capLQ}/> )
        } 
      } else {
        imageArray.push( <img key={r + i} id="cap" src={window.capEmpty}/> )
      }
    }
    return imageArray;
  }

  render() {
    debugger
    return (
      <div id="rating-view">
        {this.displayRating()}
      </div>
    )
  }
}

export default Rating;