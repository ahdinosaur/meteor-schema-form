Package.describe({
  summary: "provides Bootstrap-friendly HTML forms that match JSON-Schema"
});

Package.on_use(function (api) {
  api.use('underscore', 'client');
  api.use('jquery', 'client');
  api.use('JSV', 'client');
  api.add_files('lib/jsonform/lib/jsonform.js', 'client');
});
