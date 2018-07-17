import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	componentWillMount() {
		store.subscribe(() => this.setState( store.getState() ));
	}

	render() {
		const onClick = () => store.dispatch({type: 'TOGGLE'});
		return (
			<div>
				<h1>Register</h1>
			</div>
		)
	}
} 