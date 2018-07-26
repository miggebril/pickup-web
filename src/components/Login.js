import React from 'react';
import { login } from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRunning : false,
      isAuthenticated : false,
      errorMessage : ''
    }
  }

  handleClick = (event) => {
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    let credentials = { 
      email: email,
      password: password 
    };

    console.log("Login component props..")
    console.log(this.props)
    console.log("End of Login component props...")

    //const { dispatch } = ;

    // let error = this.props.route.onLoginClick({type: 'LOGIN_REQUEST', credentials});
    let error = this.props.dispatch(login({type: 'LOGIN_REQUEST', credentials}));
    console.log("Login click promise result: ");
    console.log(error);
    console.log("Login click credentials state:");
    console.log(credentials);
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
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

function mapStateToProps(state) {
  console.log("Login state mapping");
  console.log(state);
  console.log("End of login state");

  const { status } = state;
  
  return {
    status
  };
}

export default connect(mapStateToProps)(Login); 