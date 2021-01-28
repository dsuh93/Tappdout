import React from 'react';
import CheckinIndexItem from './checkin_index_item';

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCheckins();
  }

  render() {
    const checkinIndexItem = Object.values(this.props.checkins).reverse().map( (checkin, i) => {
      return (
        <li key={i} className="checkin-index-item-container">
          <CheckinIndexItem
            key={checkin.id + checkin.rating}
            checkin={checkin}
            checkinId={checkin.id}
            userId={this.props.userId}
            deleteCheckin={this.props.deleteCheckin}  
          />
        </li>
      )
    })

    return (
      <div className="checkin-index-container">
        <div className="checkin-index">
          <h1 className="checkin-index-title">Recent Activity</h1>
          <ul className="checkin-index-ul">
            {checkinIndexItem}
          </ul>
        </div>
      </div>
    )
  }
}

export default CheckinIndex;