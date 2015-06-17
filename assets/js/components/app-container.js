var React = require('react'),
    Header = require('./header'),
    Backbone = require('backbone'),
    AppStore = require('../stores/app-store');

var AppContainer = React.createClass({

  componentWillMount: function() {
  },

  componentDidMount: function() {
    Backbone.history.start();
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  getInitialState: function() {
    return {
      currentView: AppStore.getCurrentView().view,
      viewParams: AppStore.getCurrentView().params
    };
  },

  _onChange: function() {
    this.setState({
      currentView: AppStore.getCurrentView().view,
      viewParams: AppStore.getCurrentView().params
    });
  },

  render: function() {
    var Handler = this.state.currentView;
    return (
      <div>
        <Header />
          <div className="app-current-view">
            <Handler params={ this.state.viewParams } />
          </div>
      </div>
      );
  }
});

module.exports = AppContainer;
