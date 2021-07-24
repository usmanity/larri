const create = require('./app/create');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.send('This is the larri adda, where you going?');
  });

  app.post('/create', create);

  app.get('/me', function(req, res) {});
  app.get('/settings', function(req, res) {});
  app.get('/info/:url', function(req, res) {});
  app.get('/:url', function(req, res) {});
}
