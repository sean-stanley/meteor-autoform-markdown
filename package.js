Package.describe({
  name: 'redhead:autoform-markdown-materialize',
  version: '1.0.0',
  summary: 'A simple autoform markdown with preview using perak:markdown and styled for Materialize CSS',
  git: 'https://github.com/sean-stanley/meteor-autoform-markdown',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);
  api.use(['templating', 'reactive-var'], 'client');
  api.use(['perak:markdown@1.0.5', 'aldeed:autoform@5.4.1'], 'client');
  api.addFiles([
    'markdown.html',
    'markdown.css',
    'jquery.selection.js',
    'markdown.js'
  ], 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('q42:autoform-markdown');
});
