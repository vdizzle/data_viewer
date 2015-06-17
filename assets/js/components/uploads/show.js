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
        <div className="data-table-container">
          <ReactTable className="table table-striped table-bordered table-condensed" data={ this.state.sample } />
        </div>
      </div>
      );
  }
});

module.exports = UploadDetail;
