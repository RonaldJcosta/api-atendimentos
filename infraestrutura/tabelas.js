class Tabelas {
	init(conexao) {
		this.conexao = conexao;

		//this.criarTbAtendimentos();
	}
	
		criarTbAtendimentos() {
			const sql = "CREATE TABLE IF NOT EXIST tb_atendimento(id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))"
			this.conexao.query(sql, (err) => {
				if(err) {
					console.log("Houve um erro ao executar query "+err);
				} else {
					console.log("Tabela atendimento criada com sucesso !");
				}
			})
		}
}

module.exports = new Tabelas;
