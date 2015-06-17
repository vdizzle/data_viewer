var React = require('react'),
    ReactTable = require('reactable').Table,
    UploadStore = require('../../stores/upload-store'),
    UploadActions = require('../../actions/upload-actions');

var UploadDetail = React.createClass({
  componentWillMount: function() {
  },
  componentDidMount: function() {
    UploadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UploadStore.removeChangeListener(this._onChange);
  },

  getInitialState: function() {
    return {
      id: '',
      filename: '',
      sample:[]
    };
  },

  _onChange: function() {
    this.setState(UploadStore.getById(this.props.params.id));
  },

  render: function() {
    return (
      <div>
        <a href="#uploads">Back to List</a>
        <p>Filename: <span className="file-name">{ this.state.filename }</span></p>
        <ReactTable data={ this.state.sample } />
      </div>
      );
  }
});

module.exports = UploadDetail;
