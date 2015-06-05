var AppDispatcher = require('../dispatcher/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    UploadActions = require('../actions/upload-actions'),
    UploadConstants = require('../constants/upload-constants'),
    UploadAPI = require('../utils/upload-api'),
    assign = require('object-assign'),
    _uploads = [];

function _populateStore(data) {
  _uploads = data;
}

function _fetchAll() {
  UploadAPI.fetchAll();
}

function _create(data) {
  UploadAPI.create(data);
}

function _delete(id) {
  UploadAPI.destroy(id);
}

var UploadStore = assign({}, EventEmitter.prototype, {
  getUploads: function() {
    return _uploads;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case UploadConstants.UPLOADS_FETCH_COMPLETE:
      _populateStore(action.data);
      break;
    case UploadConstants.UPLOAD_CREATE:
      _create(action.data);
      break;
    case UploadConstants.UPLOAD_COMPLETE:
      _fetchAll();
      break;
    case UploadConstants.UPLOAD_DELETE:
      _delete(action.data);
      break;
    case UploadConstants.UPLOAD_DELETE_COMPLETE:
      _fetchAll();
      break;
    default:
  }

  UploadStore.emitChange();
  return true;
});

module.exports = UploadStore;
