var AppDispatcher = require('../dispatcher/app-dispatcher'),
    MetaInfoConstants = require('../constants/meta-info-constants');

var MetaInfoActions = {
  fetchDataTypes: function() {
    AppDispatcher.handleViewAction({
      actionType: MetaInfoConstants.META_INFO_FETCH,
      data: {}
    });
  },

  notifyDataTypesFetched: function(data) {
    AppDispatcher.handleServerAction({
      actionType: MetaInfoConstants.META_INFO_FETCH_COMPLETE,
      data: data
    });
  }
}

module.exports = MetaInfoActions;
