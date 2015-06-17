var $ = require('jquery'),
    UploadActions = require('../actions/upload-actions');

module.exports = {
  fetchAll: function() {
    $.ajax('/api/data-store/uploads', {
      type: 'GET',
      contentType: 'application/json',
      
      success: function(response) {
        UploadActions.notifyUploadsFetched(response);
      },

      error: function(response, xhr, options) {
        debugger;
      }
    });
  },

  get: function(id) {
    $.ajax('/api/data-store/uploads/' + id, {
      type: 'GET',
      contentType: 'application/json',
      data: {},

      beforeSend: function(xhr) {
      },

      success: function(response) {
        UploadActions.notifyUploadFetched(response);
      },

      error: function(response, xhr, options) {
        debugger;
      }
    });
    return false;

  },

  create: function(params) {
    $.ajax('/api/data-store/uploads', {
      type: 'POST',
      contentType: 'application/json',
      data: params,

      beforeSend: function(xhr) {
      },

      success: function(response) {
        UploadActions.notifyUploadCreated(response);
      },

      error: function(response, xhr, options) {
        debugger;
      }
    });
    return false;
  },

  update: function(id, params) {

  },

  destroy: function(id) {
    $.ajax('/api/data-store/uploads/' + id, {
      type: 'DELETE',
      contentType: 'application/json',

      success: function(response) {
        UploadActions.notifyUploadDeleted(response);
      },

      error: function(response, xhr, options) {
        debugger;
      }
    });
  }
};
