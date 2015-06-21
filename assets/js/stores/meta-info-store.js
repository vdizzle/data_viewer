var AppDispatcher = require('../dispatcher/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    MetaInfoActions = require('../actions/meta-info-actions'),
    MetaInfoConstants = require('../constants/meta-info-constants');
    MetaInfoAPI = require('../utils/meta-info-api'),
    assign = require('object-assign'),
    _meta_info = [];


function _fetchAll() {
  MetaInfoAPI.fetchDataTypes();
}

function _set(data) {
  _meta_info = data;
}

var MetaInfoStore = assign({}, EventEmitter.prototype, {
  getDataTypes: function() {
    return _meta_info;
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
    case MetaInfoConstants.META_INFO_FETCH:
      _fetchAll();
      break;
    case MetaInfoConstants.META_INFO_FETCH_COMPLETE:
      _set(action.data);
      break;
    default:
  }

  MetaInfoStore.emitChange();
  return true;
});

module.exports = MetaInfoStore;
