var React = require('react'),
    Header = require('./header'),
    Backbone = require('backbone'),
    UploadStore = require('../stores/upload-store'),
    UploadIndex = require('./uploads/index');

var AppContainer = React.createClass({

  componentWillMount: function() {
  },

  componentDidMount: function() {
    Backbone.history.start();
  },

  componentWillUnmount: function() {
    $(document).off('.app-container');
  },

  getInitialState: function() {
    return {
    };
  },

  render: function() {
    return (
      <div>
        <Header />
        <UploadIndex />
      </div>
      );
  }
});

module.exports = AppContainer;
