var USER_DATA = {
  name: 'Alex J. Tucker',
  username: 'alexjtucker',
  image: 'https://avatars0.githubusercontent.com/u/11824432?v=3&s=400'
}

var React = require('react');
var ReactDOM = require('react-dom');


var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function () {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

// Render the DOM
ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);