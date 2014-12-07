var Beer = require('../../models/beer');

module.exports = {
	create: function(req, res, cb) {
	    var dados = req.body;

		var model = new Beer(dados);
		model.save(function (err, data) {
			cb(err, data, res);
		});
	},
	retrieve: function(req, res, cb) {
		Beer.find(function (err, data) {
			cb(err, data, res);
		});
	},
	findOne: function(req, res, cb) {
	    var id = req.params.id;
	    var query = {_id: id};

		Beer.findOne(query, function (err, data) {
			cb(err, data, res);
		});
	},
	update: function(req, res, cb) {
	    var id = req.params.id;
	    var query = {_id: id};
	    var mod = req.body;

		Beer.update(query, mod, function (err, data) {
			cb(err, data, res);
		});
	},
	delete: function(req, res, cb) {
	    var id = req.params.id;
	    var query = {_id: id};

		Beer.remove(query, function (err, data) {
			cb(err, data, res);
		});
	}
};
