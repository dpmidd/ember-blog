

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  'ember-cli-bootstrap-sass': {
    'components': ['bs-alert', 'bs-notifications', 'bs-nav']
  }
});

module.exports = app.toTree();
