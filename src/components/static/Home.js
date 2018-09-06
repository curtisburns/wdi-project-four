import React from 'react';

// Components
import AuthRegister from '../auth/Register';
import AuthLogin from '../auth/Login';

export default class Home extends React.Component {
  state = {
    newUser: true
  }

  toggleNewUser = () => {
    console.log(this.state.newUser);
    const newUser = !this.state.newUser;
    this.setState({ newUser });
  }

  render() {
    return(
      <section>

        {/* Login/Register */}
        {this.state.newUser ?
          <AuthRegister handleClick={this.toggleNewUser} /> :
          <AuthLogin handleClick={this.toggleNewUser} />
        }
      </section>
    );
  }
}
