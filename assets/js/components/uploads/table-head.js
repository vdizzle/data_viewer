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

  headerTypeSelected: function(eventKey, href, target) {
  },

  render: function() {
    var menuItems = this.props.options.map(function(item) {
      return <MenuItem eventKey={ this.props.columnIndex + '|' + item.value } onSelect={ this.headerTypeSelected }>{ item.label }</MenuItem>;
    }.bind(this));
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
