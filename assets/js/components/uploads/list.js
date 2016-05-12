var React = require('react'),
    UploadListItem = require('./list-item');

var UploadList = React.createClass({
  componentDidMount: function() {
  },

  getInitialState: function() {
    return {
    };
  },

  render: function() {
    var items = this.props.items.map(function(item) {
      return <UploadListItem attributes= { item } />
    });

    return (
      <div className="upload-list">
        <ul>
        { items }
        </ul>
      </div>
      );
  }
});

module.exports = UploadList;
