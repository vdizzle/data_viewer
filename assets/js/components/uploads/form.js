var React = require('react'),
    UploadActions = require('../../actions/upload-actions'),
    UploadStore = require('../../stores/upload-store'),
    assign = require('object-assign');

var UploadForm = React.createClass({
  componentDidMount: function() {
    UploadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UploadStore.removeChangeListener(this._onChange);
  },

  getInitialState: function() {
    return {
      attachment: {
        filename: '',
        size: 0,
        type: ''
      }
    };
  },

  _onChange: function() {
    alert('Upload successful!');
  },

  _onUploadSelected: function(event) {
    var reader = new FileReader(),
        file = event.target.files[0];

    this.setState({
      attachment: {
        filename: file.name,
        size: file.size,
        filetype: file.type
      }
    });

    reader.onload = function(upload) {
      this.setState({
        attachment: assign({}, this.state.attachment, { content: upload.target.result })
      });

      UploadActions.startUpload({ attachment: this.state.attachment });
    }.bind(this);

    reader.readAsDataURL(file);
  },

  render: function() {
    return (
      <form action={this.props.action}
            method="post"
            encType="multipart/form-data"
            className="file-upload-form"
            novalidate>
        <label>Please select a file</label>
        <input type="file"
               name="file"
               id="file"
               accept="text/csv"
               onChange={this._onUploadSelected}
               required />
      </form>
      );
  }
});

module.exports = UploadForm;
