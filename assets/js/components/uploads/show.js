var React = require('react');

var UploadDetail = React.createClass({
  componentDidMount: function() {
    UploadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UploadStore.removeChangeListener(this._onChange);
  },

  getInitialState: function() {
    return {
    };
  },

  _onChange: function() {

  },
});
