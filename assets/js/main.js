'use strict';

var React = require('react'),
    AppDispatcher = require('./dispatcher/app-dispatcher'),
    AppRouter = require('./router'),
    UploadAPI = require('./utils/upload-api'),
    RouteConstants = require('./constants/route-constants'),
    AppContainer = require('./components/app-container');

var appContainer = React.createFactory(AppContainer);

UploadAPI.fetchAll();
React.render(appContainer(), document.body);
