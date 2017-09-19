import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  setMessage = event => {
    console.log(event.target.value)
    this.setState({
      message: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.setMessage}/>
        <p>You have {this.props.maxChars - this.state.message.length} characters left.</p>
      </div>
    );
  }
}

export default TwitterMessage;