var React = require('react'),
    UploadActions = require('../../actions/upload-actions'),
    UploadStore = require('../../stores/upload-store'),
    Button = require('react-bootstrap').Button,
    Modal = require('react-bootstrap').Modal,
    OverlayMixin = require('react-bootstrap').OverlayMixin,
    UploadForm = require('./form'),
    UploadList = require('./list'),
    assign = require('object-assign');

var UploadIndex = React.createClass({
  mixins: [OverlayMixin],

  componentDidMount: function() {
    UploadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UploadStore.removeChangeListener(this._onChange);
  },

  getInitialState: function() {
    return {
      isModalOpen: false,
      uploadItems: UploadStore.getUploads()
    };
  },

  handleToggle(event) {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  },
 
  _onChange: function() {
    this.setState({ isModalOpen: false, uploadItems: UploadStore.getUploads() });
  },

  renderOverlay() {
    if (!this.state.isModalOpen) {
      return <span/>;
    }

    return (
      <Modal title='Select File' onRequestHide={this.handleToggle} bsSize='large' animation={false}>
        <div className='modal-body'>
          <UploadForm />
        </div>
      </Modal>
    );
  },

  render: function() {
    return (
      <div>
        <div className='import-area'>
          <Button bsStyle='primary'
                  className='btn-import-data'
                  onClick={ this.handleToggle }>Import Data</Button>
        </div>
        <UploadList items={ this.state.uploadItems } />
      </div>
      );
  }
});

module.exports = UploadIndex;
