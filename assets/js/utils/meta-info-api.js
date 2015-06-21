var $ = require('jquery'),
    MetaInfoActions = require('../actions/meta-info-actions');

module.exports = {
  fetchDataTypes: function() {
    $.ajax('/api/data-store/meta-info/data-types', {
      type: 'GET',
      contentType: 'application/json',

      success: function(response) {
        data = response.map(function(item) {
          return { value: item.code, label: item.title }
        });
        MetaInfoActions.notifyDataTypesFetched(data);
      },

      error: function(response, xhr, options) {
        debugger;
      }
    });
  }
}
