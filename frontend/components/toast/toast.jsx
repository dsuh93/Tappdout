import React from 'react';

class Toast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toasted: false
    }
    
  }

  handleClick(e) {
    e.preventDefault();

  }

  render() {
    const toastStatus = this.state.toasted ? "toasted" : "untoasted"
    return (
      <div className="toast-btn-container">
        <button type="button" id="toast-btn" className={`${toastStatus}`}>Toast</button>
      </div>
    )
  }
}

export default Toast;