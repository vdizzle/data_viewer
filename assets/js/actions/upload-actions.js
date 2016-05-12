var AppDispatcher = require('../dispatcher/app-dispatcher'),
    UploadConstants = require('../constants/upload-constants');

var UploadActions = {
  notifyUploadsFetched: function(data) {
    AppDispatcher.handleServerAction({
      actionType: UploadConstants.UPLOADS_FETCH_COMPLETE,
      data: data
    });
  },

  fetchUpload: function(id) {
    AppDispatcher.handleViewAction({
      actionType: UploadConstants.UPLOAD_FETCH,
      data: id
    });
  },

  notifyUploadFetched: function(data) {
    AppDispatcher.handleServerAction({
      actionType: UploadConstants.UPLOAD_FETCH_COMPLETE,
      data: data
    });
  },

  startUpload: function(data) {
    AppDispatcher.handleViewAction({
      actionType: UploadConstants.UPLOAD_CREATE,
      data: data
    });
  },

  notifyUploadCreated: function(data) {
    AppDispatcher.handleServerAction({
      actionType: UploadConstants.UPLOAD_COMPLETE,
      data: data
    });
  },

  deleteUpload: function(data) {
    AppDispatcher.handleViewAction({
      actionType: UploadConstants.UPLOAD_DELETE,
      data: data
    });
  },

  notifyUploadDeleted: function(data) {
    AppDispatcher.handleServerAction({
      actionType: UploadConstants.UPLOAD_DELETE_COMPLETE,
      data: data
    });
  },
}

module.exports = UploadActions;
