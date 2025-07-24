const {v4: uuidv4, validate: validate} = require('uuid');
const agentes = [
    {
    id: uuidv4(),
    nome: "Rommel Carneiro",
    dataDeIncorporacao: "1992/10/04",
    cargo: "delegado"
    }
];

function findAll(filtro = null, ordenacao = null) {
    let agentescopia = [...agentes];
    if(filtro){
        if (filtro.colunaId){
            agentescopia = agentescopia.filter((item) => item.id.toLowerCase() == filtro.colunaId.toLowerCase());
        }
        if (filtro.colunaNome){
            agentescopia = agentescopia.filter((item) => item.nome.toLowerCase() == filtro.colunaNome.toLowerCase());
        }
        if (filtro.colunaDataDeIncorporacao){
            agentescopia = agentescopia.filter((item) => item.dataDeIncorporacao == filtro.colunaDataDeIncorporacao);
        }
        if (filtro.colunaCargo){
            agentescopia = agentescopia.filter((item) => item.cargo.toLowerCase() == filtro.colunaCargo.toLowerCase());
        }
    }
    
    if (ordenacao) {
        if(ordenacao[0] == '-'){
            ordenacao = ordenacao.slice(1);

            switch(ordenacao){
                case "id":
                    agentescopia.sort((a, b) => {
                        let colunaA = a.id.toLowerCase();
                        let colunaB = b.id.toLowerCase();
                        if(colunaA < colunaB){
                            return 1
                        }
                        if(colunaA > colunaB){
                            return -1
                        }
                        if(colunaA == colunaB){
                            return 0
                        }
                    });
                    break;
                case "nome":
                    agentescopia.sort((a, b) => {
                        let colunaA = a.nome.toLowerCase();
                        let colunaB = b.nome.toLowerCase();
                        if(colunaA < colunaB){
                            return 1
                        }
                        if(colunaA > colunaB){
                            return -1
                        }
                        if(colunaA == colunaB){
                            return 0
                        }
                    });
                    break;
                case "dataDeIncorporacao":
                    agentescopia.sort((a, b) => {
                        let colunaA = new Date(a.dataDeIncorporacao);
                        let colunaB = new Date(b.dataDeIncorporacao);
                        return colunaB - colunaA;
                    });
                    break;
                case "cargo":
                    agentescopia.sort((a, b) => {
                        let colunaA = a.cargo.toLowerCase();
                        let colunaB = b.cargo.toLowerCase();
                        if(colunaA < colunaB){
                            return 1
                        }
                        if(colunaA > colunaB){
                            return -1
                        }
                        if(colunaA == colunaB){
                            return 0
                        }
                    });
                    break;
                default:
                    agentescopia = agentescopia;
                    break;
            }
        } else{
            switch(ordenacao){
                case "id":
                    agentescopia.sort((a, b) => {
                        let colunaA = a.id.toLowerCase();
                        let colunaB = b.id.toLowerCase();
                        if(colunaA < colunaB){
                            return -1
                        }
                        if(colunaA > colunaB){
                            return 1
                        }
                        if(colunaA == colunaB){
                            return 0
                        }
                    });
                    break;
                case "nome":
                    agentescopia.sort((a, b) => {
                        let colunaA = a.nome.toLowerCase();
                        let colunaB = b.nome.toLowerCase();
                        if(colunaA < colunaB){
                            return -1
                        }
                        if(colunaA > colunaB){
                            return 1
                        }
                        if(colunaA == colunaB){
                            return 0
                        }
                    });
                    break;
                case "dataDeIncorporacao":
                    agentescopia.sort((a, b) => {
                        let colunaA = new Date(a.dataDeIncorporacao);
                        let colunaB = new Date(b.dataDeIncorporacao);
                        return colunaA - colunaB;
                    });
                    break;
                case "cargo":
                    agentescopia.sort((a, b) => {
                        let colunaA = a.cargo.toLowerCase();
                        let colunaB = b.cargo.toLowerCase();
                        if(colunaA < colunaB){
                            return -1
                        }
                        if(colunaA > colunaB){
                            return 1
                        }
                        if(colunaA == colunaB){
                            return 0
                        }
                    });
                    break;
                default:
                    agentescopia = agentescopia;
                    break;
            }
        }
        
    }
    return agentescopia
}

function findIndex(i){
    let resp;
    if(i < agentes.length && i >= 0){
        resp = agentes[i];
    } else {
        resp = null;
    }
    return resp;
}

function findId(id){
    let resp = agentes.find((item) => item.id == id);
    return resp;
}

function criarAgente(nome, data, cargo){
    let resp = false;

    let agenteadicionar = {
        "id": uuidv4(),
        "nome": nome,
        "dataDeIncorporacao": data,
        "cargo": cargo
    }

    agentes.push(agenteadicionar);
    resp = true;
    
    return resp;
}

function removerAgenteId(id){
    let resp = false;
    let i = agentes.findIndex((item) => item.id == id);
    if(i > -1){
        agentes.splice(i, 1);
        resp = true;
    }
    return resp;
}

function removerAgenteIndex(i){
    let resp = false;
    if(i < agentes.length && i < agentes.length){
        agentes.splice(i, 1);
        resp = true;
    }
    return resp;
}

function atualizarAgente(id, nome, data, cargo){
    let resp = false;
    let i = agentes.findIndex((item) => item.id == id);
    if(i > -1){
        agentes[i].nome = nome;
        agentes[i].dataDeIncorporacao = data;
        agentes[i].cargo = cargo;
        resp = true;
    }

    return resp;
}

function atualizarParcialAgente(id, nome = null, data = null, cargo = null){
    let resp = false;
    let i = agentes.findIndex((item) => item.id == id);
    if(i > -1){
        if(nome){
            agentes[i].nome = nome;
        }
        if(data){
            agentes[i].dataDeIncorporacao = data;
        }
        if(cargo){
            agentes[i].cargo = cargo;
        }
        resp = true;
    }

    return resp;
}




module.exports = {
    findAll,
    findIndex,
    findId,
    criarAgente,
    removerAgenteId,
    removerAgenteIndex,
    atualizarAgente,
    atualizarParcialAgente
}
