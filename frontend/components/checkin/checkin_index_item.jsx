import React from 'react';

class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const checkin = this.props.checkin;
    const checkinId = this.props.checkinId;
    return (
      <div className="checkin-index-item">
        <div className="checkin-item-row-1">
          <img src="" alt=""/>
          <p>{checkin.user.first_name} {checkin.user.last_name} is drinking a {checkin.beer.beer_name} by </p>
        </div>
      </div>
    )
  }
}

export default CheckinIndexItem;