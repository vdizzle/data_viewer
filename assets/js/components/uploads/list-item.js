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

  _onChange: function() {

  },

  render: function() {
    return (
      <li data-id={ this.props.attributes.id }>
        <span className="upload-item">{ this.props.attributes.filename }</span>
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
