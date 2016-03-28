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

// Building UIs with Pure Functions and Function Composition
// The next are functions composed in a way that simply passes values
/*
 * var getProfilePic = function (username) {
 *   return 'https://photo.fb.com/' + username
 * }
 * var getProfileLink = function (username) {
 *   return 'https://www.fb.com/' + username
 * }
 * var getProfileData = function (username) {
 *   return {
 *     pic: getProfilePic(username),
 *     link: getProfileLink(username)
 *   }
 * }
 * getProfileData('tylermcginnis')
 */
// Above can be implemented with render method 
// Below composes functions to get UI, rather than value
/* 
 * var ProfilePic = React.createClass({
 *   render: function() {
 *     return (
 *       <img src={'https://photo.fb.com/' + this.props.username} />
 *     )
 *   }
 * })
 * var ProfileLink = React.createClass({
 *   render: function() {
 *     return (
 *       <a href={'https//www.fb.com/' + this.props.username}>
 *         {this.props.username}
 *       </a>
 *     )
 *   }
 * })
 * var Avatar = React.createClass({
 *   render: function() {
 *     return (
 *       <div>
 *         <ProfilePic username={this.props.username} />
 *         <ProfileLink username={this.props.username} />
 *       </div>
 *     )
 *   }
 * })
 * <Avatar username="alexjtucker" />
 */
// These are"pure functions"
/*var ProfilePic = function (props) {
 *   return <img src={'https://photo.fb.com/' + props.username} />
 * }
 * var ProfileLink = function (props) {
 *   return (
 *     <a href={'https://www.fb.com/' + props.username}>
 *       {props.username}
 *     </a>
 *   )
 * }
 * var Avatar = function (props) {
 *   return (
 *     <div>
 *       <ProfilePic username={props.username} />
 *       <ProfileLink username={props.username} />
 *     </div>
 *   )
 * }
 * <Avatar username="alexjtucker" />
 */
// Render the DOM
ReactDOM.render(
  <FriendsContainer />,
  document.getElementById('app')
);