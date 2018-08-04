import { Link } from 'react-router-dom';
import React from 'react';

const RenderLogin = (props) => {
  if (!props.currentUser || props.currentUser) {
    return (
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    );
  }

  return null;
};

const RenderLogout = (props) => {
  if (props.currentUser && !props.currentUser) {
    return (
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Log out
        </Link>
      </li>
    );
  }

  return null;
}

class Header extends React.Component {

  render() {
    console.log("Header PROPS");
    console.log(this.props);

    return (
      <nav className="navbar navbar-light">
        <div className="container">
          
          <Link to="/" className="navbar-brand" >
            {this.props.appName.toLowerCase()}
          </Link>

          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <RenderLogin currentUser={this.props.currentUser}/>

            <RenderLogout currentUser={this.props.currentUser}/>

          </ul>

        </div>
      </nav>
    );
  }
}

export default Header;