var React = require('react'),
    ReactTable = require('reactable').Table,
    Thead = require('./table-head'),
    Tr = require('./table-row'),
    UploadStore = require('../../stores/upload-store'),
    MetaInfoStore = require('../../stores/meta-info-store');

var UploadDetail = React.createClass({
  componentWillMount: function() {
  },
  componentDidMount: function() {
    UploadStore.addChangeListener(this._onChange);
    MetaInfoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UploadStore.removeChangeListener(this._onChange);
    MetaInfoStore.addChangeListener(this._onChange);
  },

  getInitialState: function() {
    return {
      upload: {
        id: '',
        filename: '',
        sample: [{}]
      },
      metaTypes: MetaInfoStore.getDataTypes()
    };
  },

  _onChange: function() {
    this.setState({
      upload: UploadStore.getById(this.props.params.id),
      metaTypes: MetaInfoStore.getDataTypes()
    });
  },

  render: function() {
    var tableHeader = Object.keys(this.state.upload.sample[0]).map(function(title){
      return <Thead name={ title} options={ this.state.metaTypes } />
    }.bind(this));

    var tableBody = this.state.upload.sample.map(function(item) {
      return <Tr data={ item } />;
    }.bind(this));
    return (
      <div>
        <a href="#uploads">Back to List</a>
        <p>Filename: <span className="file-name">{ this.state.upload.filename }</span></p>
        <div className="data-table-container">
          <table className="table table-striped table-bordered table-condensed upload-table">
            <thead>{ tableHeader }</thead>
            <tbody>{ tableBody }</tbody>
          </table>
        </div>
      </div>
      );
  }
});

module.exports = UploadDetail;
