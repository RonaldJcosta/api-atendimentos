const customExpress = require('./config/costumeExpress');
const conexao = require('./infraestrtura/conexao');

conexao.connect(err => {
	if(err) {
		console.log(err);
	} else {
		console.log("Conexao com o banco de dados realizado com sucesso !");
	}
});

const app = customExpress();
const _PORT = 3000;

app.listen(_PORT, () => {
	console.log(`App running on port ${_PORT}`);
});
