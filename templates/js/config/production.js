var app = require('../app');

// no stacktrace leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.send({
		error: {
			status: err.status || 500,
			message: err.message
		}
	})
});