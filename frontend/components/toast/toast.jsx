import React from 'react';

class Toast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toasted: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    debugger
    if (this.props.checkin.toasts) {
      debugger
      if (this.props.checkin.toasts[this.props.toasterId]) {
        this.setState({toasted: true})
      } else {
        this.setState({toasted: false})
      }
    } else {
      this.setState({toasted: false})
    }
  }

  handleClick(e) {
    e.preventDefault();
    const toasterId = this.props.toasterId;
    const checkinId = this.props.checkinId;
    debugger
    if (!this.state.toasted) {
      debugger
      this.setState({toasted: true});
      this.props.createToast({toaster_id: toasterId, checkin_id: checkinId})
      if(this.props.root === "profile") {
        this.props.fetchUser(this.props.match.params.profileId)
      }
    } else {
      debugger
      this.setState({toasted: false});
      this.props.deleteToast(this.props.checkin.toasts[toasterId].id)
      if(this.props.root === "profile") {
        this.props.fetchUser(this.props.match.params.profileId)
      }
    }
  }

  render() {
    if (!this.props.checkinId) {
      return null;
    } else {
      debugger
      const toastStatus = this.state.toasted ? "toasted" : "untoasted"
      return (
        <div className="toast-btn-container">
          <button
            onClick={this.handleClick}
            type="button"
            id="toast-btn"
            className={`${toastStatus}`}
          >
            <img src={window.feedToastIcon}/>
            <p>Toast</p>
          </button>
        </div>
      )
    }
  }
}

export default Toast;