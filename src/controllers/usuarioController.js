var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var usuario = req.body.usernameServer;
    var senha = req.body.senhaServer;

    if (usuario == undefined) {
        res.status(400).send("Seu username está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(usuario, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Usuario e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var usuario = req.body.usernameServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, sobrenome, usuario, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function listarFotos(req, res) {
    usuarioModel.listarFotos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function attFoto(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idImg = req.body.idImge;

    console.log("Este é o valor da variavei id Usuario" + idUsuario);
    console.log("Este é o valor da variavei id Imagem" + idImg);

    if(idUsuario == null || idUsuario == undefined){
        res.status(400).send("Ta undefined meu rei")
    }else if(idImg == null || idImg == undefined){
        res.status(400).send("Seu id img ta undefined")
    }

    usuarioModel.attFoto(idImg, idUsuario)
        .then(function (resultado) {
            res.status(204).send("Update realizado com sucesso.");
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a atualização da imagem de perfil do usuário! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function addVoto (req, res) {
    console.log("To na controller do voto");
    var atoVotado = req.body.opcSelecionadaServer

    console.log("Esse aqui é o valor do ato selcionado:" + atoVotado);

    if (addVoto == null || addVoto == undefined){
        res.status(404).send("Meu parceiro, seu voto ta sem valor :(")
    }else {
        usuarioModel.addVoto(atoVotado)
        .then(function (resultado) {
        
            res.status(204).send("Update realizado com sucesso.");
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar ao inseriri o voto da enquete! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function attGrafico (req, res){
    console.log("Mano to na attGrafico, mas, na model!!!!!");
    usuarioModel.attGrafico()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}


module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    listarFotos,
    attFoto,
    addVoto,
    attGrafico
}