var Backbone = require('backbone'),
    AppDispatcher = require('./dispatcher/app-dispatcher'),
    RouteConstants = require('./constants/route-constants');

var AppRouter = Backbone.Router.extend({
  routes: {
    'uploads': 'uploadsIndex',
    'uploads/:id': 'uploadsDetail'
//    '*glob(?*querystring)': 'navigateToRoute'
  },

  uploadsIndex: function() {
    AppDispatcher.handleViewAction({
      actionType: RouteConstants.UPLOADS_INDEX,
      params: {}
    });
  },

  uploadsDetail: function(id) {
    AppDispatcher.handleViewAction({
      actionType: RouteConstants.UPLOADS_DETAIL,
      params: { id: id }
    });
  },

  navigateToRoute: function(route, queryString) {
    var params = this._parseQueryString(queryString);

    AppDispatcher.handleViewAction({
      actionType: RouteConstants.ROUTE_CHANGE,
      route: route,
      params: params
    });
  },

  _parseQueryString: function(queryString) {
    if (queryString) {
      return queryString.split('&').reduce(function(result, entry) {
        var parts = entry.split('=');
        result[parts[0]] = parts[1];
        return result;
      }, {});
    }
    else {
      return {};
    }
  }
});

module.exports = new AppRouter();
