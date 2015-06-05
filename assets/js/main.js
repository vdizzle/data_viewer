'use strict';

var React = require('react'),
    AppDispatcher = require('./dispatcher/app-dispatcher'),
    UploadAPI = require('./utils/upload-api'),
    AppContainer = require('./components/app-container');

var appContainer = React.createFactory(AppContainer);

UploadAPI.fetchAll();
React.render(appContainer(), document.body);