var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT emailUsuario, senhaUsuario, idEstadio FROM usuario JOIN 
        clube ON usuario.fkClube = idClube JOIN estadio ON idClube = estadio.fkClube  WHERE emailUsuario = '${email}' AND senhaUsuario = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    
    
    // VERIFICAÇÃO DE LOGIN CASO FOR DE CLUBES
    // if(database.executar(instrucao).length == 0) {
    //     instrucao = `
    //         SELECT * FROM clube WHERE email = '${email}' AND senha = '${senha}';
    //     `;
    // }
        
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(clube, endereco, estadio, gramado) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao1 = `
        INSERT INTO clube (nomeClube, cnpjClube, senhaClube, emailClube, telefoneClube, ufClube) VALUES ('${clube.nomeClube}', '${clube.cnpjClube}', '${clube.senhaClube}', '${clube.emailClube}', '${clube.telefoneClube}', '${estadoClube}');
    `;

    var instrucao2 = `
        INSERT INTO endereco (cep, logradouro, numero, complemento) VALUES ('${endereco.cepEndereco}', '${endereco.logradouroEndereco}', '${endereco.numeroEndereco}', '${endereco.complementoEndereco}');
    `;

    var instrucao3 = `
        INSERT INTO estadio (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;

    var instrucao4 = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return [database.executar(instrucao1), database.executar(instrucao2), database.executar(instrucao3), database.executar(instrucao4)];
}

function cadastrarClube(nome, email, senha, cnpj, telefone, uf) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarClube():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO clube (nomeClube, email, senha, cnpj, telefoneCelular, uf) VALUES ('${nome}', '${email}', '${senha}', '${cnpj}', '${telefone}', '${uf}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarEndereco(cep, logradouro, numero, complemento) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEndereco():", cep, logradouro, numero, complemento);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO endereco (cep, logradouro, numero, complemento) VALUES ('${cep}', '${logradouro}', '${numero}', '${complemento}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    cadastrarClube,
    cadastrarEndereco,
    listar,
};