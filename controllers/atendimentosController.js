
module.exports = app => {

	app.get("/atendimento",  (req, res) => {
		return res.send("Hello");
	});

}

