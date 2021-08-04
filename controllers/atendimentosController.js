const Atendimento = require('../models/Atendimento');
module.exports = app => {

	app.get("/atendimento",  (req, res) => {
		return res.send("Hello");
	});

	app.post("/atendimento", (req, res) => {
		
	})

}

