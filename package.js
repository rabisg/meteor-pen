
Package.describe({
    summary: "Pen-editor repackaged for Meteor",
});

Package.on_use(function (api) {
  api.add_files(['lib/src/font/fontello.eot', 'lib/src/font/fontello.svg', 'lib/src/font/fontello.ttf', 'lib/src/font/fontello.woff'], 'client')
  api.add_files('lib/src/pen.css', 'client');
  api.add_files('lib/src/pen.js', 'client');
  api.add_files('lib/src/markdown.js', 'client');

  // This makes the paths to the fonts absolute
  api.add_files('override.css', 'client');
});
