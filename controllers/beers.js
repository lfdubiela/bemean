var Beer = require('../models/beer');
var msg = '';

module.exports = {
	renderList: function(req, res, cb) {
    var query = {};
    Beer.find(query, function (err, data) {
      cb(err, data, res);
    });
	},
  renderCreate: function(req, res, cb) {
    cb(null, null, res);
  },
  renderShow: function(req, res, cb) {
    var id = req.params.id;
    var query = {_id: id};
    Beer.findOne(query, function (err, data) {
      cb(err, data, res);
    });
  },
  renderEdit: function(req, res, cb) {
    var id = req.params.id;
    var query = {_id: id};
    Beer.findOne(query, function (err, data) {
      cb(err, data, res);
    });
  },
  renderRemove: function(req, res, cb) {
    var id = req.params.id;
    var query = {_id: id};
    Beer.findOne(query, function (err, data) {
      cb(err, data, res);
    });
  }
};
