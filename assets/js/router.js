var Backbone = require('backbone'),
    AppDispatcher = require('./dispatcher/app-dispatcher'),
    RouteConstants = require('./constants/route-constants');

var AppRouter = Backbone.Router.extend({
  routes: {
    '*glob(?*querystring)': 'navigateToRoute'
  },

  navigateToRoute: function(route, queryString) {
    debugger;
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
