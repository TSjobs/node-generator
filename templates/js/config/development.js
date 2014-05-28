var app = require('../app');

// print stacktrace on development
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.send({
		error: {
			status: err.status || 500,
			message: err.message,
			trace: JSON.stringify(err)
		}
	});
});