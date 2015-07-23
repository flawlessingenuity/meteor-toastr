Package.describe({
  name: 'flawless:meteor-toastr',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor wrapper for Toastr Javascript library',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/flawlessingenuity/meteor-toastr',
  // Brief, one-line summary of the package.
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('jquery', ['client']);
  api.addFiles('lib/toastr.min.js', ['client']);
  api.addFiles('lib/toastr.min.css', ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('flawless:meteor-toastr');
});
