var React = require('react'),
    MenuItem = require('react-bootstrap').MenuItem,
    DropdownButton = require('react-bootstrap').DropdownButton;

var TableHead = React.createClass({
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
    var menuItems = this.props.options.map(function(item) {
      return <MenuItem eventKey={ item.value }>{ item.label }</MenuItem>;
    });
    return (
      <th>
        <DropdownButton>
          { menuItems }
        </DropdownButton>
        <input type="text" className="editable" value={ this.props.name } />
      </th>
      );
  }
});

module.exports = TableHead;
