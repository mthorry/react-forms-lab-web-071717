import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    console.log(event.target, "handleChange")
    this.setState({
      [event.target.name]: event.target.value
    })
  }

    handleSubmit = event => {
      console.log(this, "handleSubmit")
      event.preventDefault()
        const username = this.state.username
        const password = this.state.password
        if (username.length > 0 && password.length > 0) {
          this.props.onSubmit({username, password})
        }
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;