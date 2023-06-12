var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT
            u.id,
            u.nome,
            u.sobrenome,
            u.nomeUsuario,
            u.email,
            i.url 
        FROM 
	        usuario u 
        LEFT JOIN 
	        imgPerfil i 
        ON 
	        u.fkImg = i.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(usuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", usuario, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE nomeUsuario = '${usuario}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, sobrenome, usuario, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome,sobrenome, usuario, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, sobrenome, nomeUsuario, email, senha) VALUES ('${nome}', '${sobrenome}', '${usuario}','${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarFotos(){
    console.log("To no usuarioModels.listarFotos");
    return database.executar(`SELECT * FROM imgPerfil`);

}
function attFoto(idImg, idUsuario){
    console.log("Tô no comando de atualizar do banco")
    var instrucao = `UPDATE usuario SET fkImg = ${idImg} WHERE id = ${idUsuario} `
    return database.executar(instrucao)
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    listarFotos,
    attFoto
};