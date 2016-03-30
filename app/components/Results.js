var React = require('react');
var PropTypes = React.PropTypes;

unction puke (object) {
  return <pre>{JSON.stringify(object, 2, ' ')}</pre>
}

function Results (props) {
    return (
      <div> Results: {puke(props)} </div>
    )
  };

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.arrary.isRequired,
  scores: PropTypes.arrary.isRequired
}

module.exports = Results;