import React, {Component} from 'react';
import EmailLogin from './emailLogin';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginMethod: props.route.params.loginMethod,
    };
  }

  render() {
    if (this.state.loginMethod == 'email') {
      return <EmailLogin />;
    }
  }
}

export default Login;
