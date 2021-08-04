const conexao = require('../infraestrutura/conexao');

class Atendimento {
	adicionar(atendimento) {
			const sql = 'INSERT INTO atendimento SET ?'
			
		conexao.query(sql, atendimento, (err, resultado) => {
			if(err) {
				console.log(err);
			} else {
				console.log(resultado);
			}
		})
	}
}

module.exports = new Atendimento;
