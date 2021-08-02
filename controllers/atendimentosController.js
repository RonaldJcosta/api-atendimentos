
module.exports = app => {

	app.get("/atendimento",  (req, res) => {
		return res.send("Hello");
	});

	app.post("/atendimento", (req, res) => {
		console.log(req.body);
		res.send("Realizando um post");
	})

}

