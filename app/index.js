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

// Parent
var FriendsContainer = React.createClass({
	render: function () {
		var name = 'Alex J. Tucker'
		var friends = ['Ceri','Midna','me','myself','I']
		return (
			<div>
				<h3> Name: </h3>
				<h4> {name}</h4>
				<ShowList names={friends} />
			</div>
		)
	}
});

// Child of FriendsContainer
var ShowList = React.createClass({
	render: function () {
		// Following is equivalent to:
		//var listItems = friends.map(fucntion(friend){
		//  return "<li> " + friend + "</li>";
		//})
		//console.log(listItems);//["<li>friend(1)</li>","<li>friend(2)</li>",...]
		var listItems = this.props.names.map(function(friend){
			return <li> {friend} </li>;
		});
		return (
			<div>
				<h3> Friends </h3>
				<ul>
					{listItems}
				</ul>
			</div>
		)
	}
});

ReactDOM.render(
	<FriendsContainer />,
	document.getElementById('app')
);