var React = require('react'),
    UploadStore = require('../../stores/upload-store'),
    UploadActions = require('../../actions/upload-actions');

var UploadListItem = React.createClass({
  componentDidMount: function() {
    UploadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UploadStore.removeChangeListener(this._onChange);
  },

  getInitialState: function() {
    return {
    };
  },

  delete: function(event) {
    UploadActions.deleteUpload(this.props.attributes.id);
    return false;
  },

  onClick: function(event) {
    UploadActions.fetchUpload(this.props.attributes.id);
  },

  _onChange: function() {
    // do something
  },

  render: function() {
    return (
      <li data-id={ this.props.attributes.id }>
        <a href={ "#uploads/" + this.props.attributes.id }
           className="upload-item"i
           onClick={ this.onClick }>
           { this.props.attributes.filename }
        </a>
        <a className="delete"
           data-id={ this.props.attributes.id }
           onClick={ this.delete }>
          <span className="icon"></span>
        </a>
      </li>
      );
  }
});

module.exports = UploadListItem;
