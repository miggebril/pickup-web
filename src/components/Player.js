import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

class Player extends React.Component {
	render() {
		const { onPlayerClick, isAuthenticated, player } = this.props;

		return (
			<div>
				{
					isAuthenticated &&
					<div className="col-sm-3">
						<button onClick={onPlayerClick} className="btn btn-primary">
							Get Account Info
						</button>
					</div>
				}
			</div>
		);
	}
}

export default connect(() => ({}))(Player);