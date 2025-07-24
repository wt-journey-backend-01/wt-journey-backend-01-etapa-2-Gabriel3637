const {v4: uuidv4, validate} = require('uuid');
const agentesRepository = require('./agentesRepository');


const casos = [
    {
        id: uuidv4(),
        titulo: "homicidio",
        descricao: "Disparos foram reportados às 22:33 do dia 10/07/2007 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.",
        status: "aberto",
        agente_id: null 
    }
]

function findAll(filtro = null, ordenacao = null) {
    let casosCopia = [...casos];

    if(filtro){
        if(filtro.colunaId){
            casosCopia = casosCopia.filter((item) => item.id.toLowerCase() == filtro.colunaId.toLowerCase());
        }
        if(filtro.colunaTitulo){
            casosCopia = casosCopia.filter((item) => item.titulo.toLowerCase() == filtro.colunaTitulo.toLowerCase());
        }
        if(filtro.colunaDescricao){
            casosCopia = casosCopia.filter((item) => item.descricao.toLowerCase() == filtro.colunaDescricao.toLowerCase());
        }
        if(filtro.colunaStatus){
            casosCopia = casosCopia.filter((item) => item.status.toLowerCase() == filtro.colunaStatus.toLowerCase());
        }
        if(filtro.colunaAgenteId){
            console.log(filtro.colunaAgenteId);
            if(filtro.colunaAgenteId == "null"){
                casosCopia = casosCopia.filter((item) => {
                    if(!item.agente_id){
                        return true;
                    }else{
                        return false;
                    }
                })
            } else {
                casosCopia = casosCopia.filter((item) => {
                    if(item.agente_id){
                        return item.agente_id.toLowerCase() == filtro.colunaAgenteId.toLowerCase();
                    }else{
                        return false;
                    }
                })
            }
        }
    }


    if(ordenacao){
        if(ordenacao[0] == '-'){
            ordenacao = ordenacao.slice(1);
            switch(ordenacao){
                case "id":
                    casosCopia.sort((a, b) => {
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
                case "titulo":
                    casosCopia.sort((a, b) => {
                        let colunaA = a.titulo.toLowerCase();
                        let colunaB = b.titulo.toLowerCase();
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
                case "descricao":
                    casosCopia.sort((a, b) => {
                        let colunaA = a.descricao.toLowerCase();
                        let colunaB = b.descricao.toLowerCase();
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
                case "status":
                    casosCopia.sort((a, b) => {
                        let colunaA = a.status.toLowerCase();
                        let colunaB = b.status.toLowerCase();
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
                case "agente_id":
                    casosCopia.sort((a, b) => {
                        let colunaA = a.agente_id.toLowerCase();
                        let colunaB = b.agente_id.toLowerCase();
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
            }
        }else{
            switch(ordenacao){
                case "id":
                    casosCopia.sort((a, b) => {
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
                case "titulo":
                    casosCopia.sort((a, b) => {
                        let colunaA = a.titulo.toLowerCase();
                        let colunaB = b.titulo.toLowerCase();
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
                case "descricao":
                    casosCopia.sort((a, b) => {
                        let colunaA = a.descricao.toLowerCase();
                        let colunaB = b.descricao.toLowerCase();
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
                case "status":
                    casosCopia.sort((a, b) => {
                        let colunaA = a.status.toLowerCase();
                        let colunaB = b.status.toLowerCase();
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
                case "agente_id":
                    casosCopia.sort((a, b) => {
                        let colunaA = a.agente_id.toLowerCase();
                        let colunaB = b.agente_id.toLowerCase();
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
            }
        }
    }

    return casosCopia
}

function findIndex(i){
    let resp;
    if(i < casos.length && i >= 0){
        resp = casos[i];
    } else {
        resp = null;
    }
    return resp;
}

function findId(id){
    let resp = casos.find((item) => item.id == id);
    return resp;
}

function criarCaso(titulo, descricao, status, agente_id){
    let resp = false;

    let casoadicionar = {
        "id": uuidv4(),
        "titulo": titulo,
        "descricao": descricao,
        "status": status,
        "agente_id": agente_id
    }

    casos.push(casoadicionar);
    resp = true;
    
    return resp;
}

function removerCasoId(id){
    let resp = false;
    let i = casos.findIndex((item) => item.id == id);
    if(i > -1){
        casos.splice(i, 1);
        resp = true;
    }
    return resp;
}

function removerCasoIndex(i){
    let resp = false;
    if(i < casos.length && i < casos.length){
        casos.splice(i, 1);
        resp = true;
    }
    return resp;
}

function atualizarCaso(id, titulo, descricao, status, agente_id){
    let resp = false;
    let i = casos.findIndex((item) => item.id == id);
    if(i > -1){
        casos[i].titulo = titulo;
        casos[i].descricao = descricao;
        casos[i].status = status;
        casos[i].agente_id = agente_id;
        resp = true;
    }

    return resp;
}

function atualizarParcialCaso(id, titulo = null, descricao = null, status = null, agente_id = undefined){
    let resp = false;
    let i = casos.findIndex((item) => item.id == id);
    if(i > -1){
        if(titulo){
            casos[i].titulo = titulo;
        }
        if(descricao){
            casos[i].descricao = descricao;
        }
        if(status){
            casos[i].status = status;
        }
        if(agente_id !== undefined){
            casos[i].agente_id = agente_id;
        }
        resp = true;
    }

    return resp;
}

function pesquisarCasos(pesquisa) {
    let casosFiltrados = casos.filter(caso => 
        caso.titulo.toLowerCase().includes(pesquisa.toLowerCase()) || 
        caso.descricao.toLowerCase().includes(pesquisa.toLowerCase())
    );
    return casosFiltrados;
}

//let teste = 'Assalto a mão armada em uma loja de conveniência no centro às 19:15 do dia 12/08/2010.'
//console.log(teste.toLowerCase().includes('assalto'.toLowerCase()));

module.exports = {
    findAll,
    findIndex,
    findId,
    criarCaso,
    removerCasoId,
    removerCasoIndex,
    atualizarCaso,
    atualizarParcialCaso,
    pesquisarCasos
}
