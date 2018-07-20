import React from 'react';
import { login } from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    onLoginClick: (creds) =>
      dispatch({type: 'LOGIN_REQUEST', creds})
};

class Login extends React.Component {

  handleClick = (event) => {
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    let credentials = { 
      email: email,
      password: password 
    };

    console.log(this.props)
    this.props.onLoginClick(credentials);
  };

  render() {
    const { errorMessage } = this.props;
    
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

                  {
                    errorMessage &&
                    <div className="isa_error">
                      <p>{errorMessage}</p>
                    </div>
                  }

                </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

export default connect(() => ({}), ({}))(Login);