const customExpress = require('./config/costumeExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');
conexao.connect(err => {
	if(err) {
		console.log("Houve um erro ao se conectar com o banco de dados");
	} else {

		console.log("Banco de dados conectado com sucesso");
		
		Tabelas.init(conexao);
		const app =  customExpress();
		const PORT = 3000;

		app.listen(PORT, () => {
			console.log(`Servidor rodando na porta ${PORT}` );
		})
	}
})
