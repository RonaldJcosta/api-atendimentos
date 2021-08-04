const Atendimento = require('../models/atendimentos');

module.exports = app => {
	app.get("/atendimento",  (req, res) => {
		return res.send("Hello");
	});

	app.post("/atendimento", (req, res) => {
		const atendimento = req.body;
		Atendimento.adicionar(atendimento);
		res.send(atendimento);
	})

}

