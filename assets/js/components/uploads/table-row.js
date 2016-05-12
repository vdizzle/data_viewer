var React = require('react');

var TableRow = React.createClass({
  componentWillMount: function() {
  },
  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  getInitialState: function() {
    return {};
  },

  render: function() {
    var columns = Object.keys(this.props.data).map(function(key) {
      return <td>{ this.props.data[key] }</td>;
    }.bind(this));

    return (
      <tr>{ columns }</tr>
      );
  }
});

module.exports = TableRow;
