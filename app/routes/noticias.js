module.exports = function(app) {

	app.get('/noticias', function(req, res){

		var mysql = require('mysql');

		var sql1 = "USE ";
		var sql2 = "SELECT * FROM noticias";

		var connection = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "Th3l3m@76",
			database: "portal_noticias"
		});

		connection.query(sql1 + connection.database);

		connection.query(sql2, function(err, result){
				res.send(result);
			});
	
		// res.render("noticias/noticias");
	});
};