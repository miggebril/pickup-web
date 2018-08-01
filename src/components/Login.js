import React from 'react';
import { login } from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Login extends React.Component {

  state = {
    isLoggedIn: false
  };

  handleClick(event) {
    event.preventDefault();

    let credentials = {
      email : this.refs.email.value.trim(),
      password : this.refs.password.value.trim() 
    };

    console.log("Login component props..\n");
    console.log(this.props);

    this.props.dispatch(login({ type : 'LOGIN_REQUEST', credentials}));
    this.props.router.push("/");
    this.setState({
      isLoggedIn: true
    });
  };

  render() {
    const { errorMessage } = this.props;
    console.log("Login STATE");
    console.log(this.state);

    console.log("Login PROPERTIES");
    console.log(this.props);
    return (
      <div className="auth-page">
        <div className="container-page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              <p className="text-xs-center">
                <a className="form-link">
                  Register to ball
                </a>
              </p>

              <form>
                <fieldset>
                  

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type='email'
                    ref='email'
                    placeholder="Email" />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type='password'
                    ref='password'
                    placeholder="Password" /> 
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  onClick={(event) => this.handleClick(event)}>

                  Get Next
                </button>
                </fieldset>
              </form>

              {
                errorMessage &&
                <p className="isa_error">{errorMessage}</p>
              }

            </div>

          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func,
  errorMessage: PropTypes.string
};

export default connect(() => ({}))(Login);