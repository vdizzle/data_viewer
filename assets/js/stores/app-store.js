var AppDispatcher = require('../dispatcher/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    RouteConstants = require('../constants/route-constants'),
    assign = require('object-assign'),
    UploadIndex = require('../components/uploads/index'),
    UploadDetail = require('../components/uploads/show'),
    _currentView = UploadIndex,
    _params = {};

function _setAppView(view, params) {
  _currentView = view;
  _params = params;
}

var AppStore = assign({}, EventEmitter.prototype, {
  getCurrentView: function() {
    return { view: _currentView, params: _params };
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
    case RouteConstants.UPLOADS_INDEX:
      _setAppView(UploadIndex, action.params);
      break;
    case RouteConstants.UPLOADS_DETAIL:
      _setAppView(UploadDetail, action.params);
      break;
    default:
      return true;
  }

  AppStore.emitChange();

  return true;
});

module.exports = AppStore;
