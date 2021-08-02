const customExpress = require('./config/costumeExpress');
const conexao = require('./infraestrtura/conexao');

try {
	
	conexao.connect(() => {
		console.log("Foi realizado a conexão com sucesso");
	});

} catch(err) {
	console.log("Houve um erro ao conectar ao banco de dados");
}

const app = customExpress();
const _PORT = 3000;

app.listen(_PORT, () => {
	console.log(`App running on port ${_PORT}`);
});
