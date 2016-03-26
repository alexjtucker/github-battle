var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
	render: function () {
		return(
			<div> Hello World! :) </div>
		)
	}
});

var HelloUser = React.createClass({
	render: function () {
		return(
			<div> What''s up, {this.props.name}?</div>
		)
	}	
});

ReactDOM.render(
	<HelloUser name="Alex"/>,
	document.getElementById('app')
);