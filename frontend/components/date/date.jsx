import React from 'react';

class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date() - new Date(`${this.props.createdAt}`)
    }
    this.renderDate = this.renderDate.bind(this)
  }

  renderDate() {
    const date = this.state.date;
    if (date / 1000 < 60) {
      return "a few seconds ago"
    } else if ((date / 1000 >= 60) && (date / 1000 < 120)) {
      return "1 minute ago"
    } else if ((date / 1000 >= 120) && (date / 60000 < 1)) {
      return `${Math.floor(date / 1000)} minutes ago`
    } else if ((date / 60000 >= 1) && (date / 60000 < 2)) {
      return `1 hour ago`
    } else if ((date / 60000 >= 2) && (date / 1440000 < 24)) {
      return `${Math.floor(date / 1440000)} hours ago`
    } else if ((date / 1440000 >= 24)) {
      const date = new Date(`${this.props.createdAt}`).toDateString().split(' ');
      const day = date[2];
      const month = date[1];
      const year = date[3].slice(2);
      return `${day} ${month} ${year}`
    }
  }

  render() {

    return (
      <div>
        <p>{this.renderDate()}</p>
      </div>
    )
  }
}

export default Date;