const {v4: uuidv4, validate} = require('uuid');
const agentesRepository = require('./agentesRepository');


const casos = [
  {
    id: '58260de7-7be3-4d02-94e4-4c8f51b5fe59',
    titulo: 'homicidio',
    descricao: 'Disparos foram reportados às 22:33 do dia 10/07/2007 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.',
    status: 'aberto',
    agente_id: '553f2b26-331e-4302-97d8-fb5b9a95cba8'
  },
  {
    id: '43b1333d-c8b3-41d8-a61c-d51891baa048',
    titulo: 'roubo',
    descricao: 'Assalto a mão armada em uma loja de conveniência no centro às 19:15 do dia 12/08/2010.',
    status: 'solucionado',
    agente_id: 'c93dea02-c8dd-4fa6-bba5-2bc2661dbff8'
  },
  {
    id: 'e7cf9a73-7a4d-4869-87aa-ed6189ab4b1c',
    titulo: 'homicidio',
    descricao: 'Crime ocorrido em uma residência no bairro Jardins às 03:00 do dia 15/09/2015.',
    status: 'aberto',
    agente_id: '2bf83017-8e0d-43c5-b3b1-6ee98b4fdac2'
  },
  {
    id: '2777424f-f9a6-4040-8b0c-cde4c1d37006',
    titulo: 'furto',
    descricao: 'Furto de veículo na rua principal do bairro São José às 14:20 do dia 20/11/2018.',
    status: 'aberto',
    agente_id: '1948520c-8cd5-4d4b-8600-a59c48453d16'
  },
  {
    id: '7f08011e-d4a3-43eb-8e82-dc9f8321e1da',
    titulo: 'roubo',
    descricao: 'Assalto a pedestres no parque municipal às 17:45 do dia 05/03/2020.',
    status: 'solucionado',
    agente_id: '5d592c77-29c5-41f9-988b-0d7911050967'
  },
  {
    id: 'd3035f18-5c5f-4fee-99ca-348007647442',
    titulo: 'homicidio',
    descricao: 'Incidente com vítima fatal no bairro Centro às 23:50 do dia 18/04/2012.',
    status: 'aberto',
    agente_id: '553f2b26-331e-4302-97d8-fb5b9a95cba8'
  },
  {
    id: 'ddb8216f-f192-4d99-86f5-426da32a205a',
    titulo: 'sequestro',
    descricao: 'Sequestro relatado na rodovia estadual às 21:00 do dia 25/06/2019.',
    status: 'em andamento',
    agente_id: '0a2df2ca-d8a0-4aa3-a107-910d61711707'
  },
  {
    id: 'c988369f-6b57-4361-abe3-e51941b85955',
    titulo: 'roubo',
    descricao: 'Assalto a banco no centro da cidade às 10:30 do dia 30/01/2017.',
    status: 'solucionado',
    agente_id: 'd2fc4859-ded7-49d3-b261-be26990978e1'
  },
  {
    id: '0511c303-ba28-4148-82b1-3a964b3f2664',
    titulo: 'furto',
    descricao: 'Furto de objetos pessoais em um shopping às 16:00 do dia 14/02/2021.',
    status: 'aberto',
    agente_id: 'f0ee7c1c-9a22-4464-a9cd-bb96ffe41293'
  },
  {
    id: '2b200260-9549-46fd-8af2-f61d26fa203e',
    titulo: 'homicidio',
    descricao: 'Crime registrado em um bar no bairro Vila Nova às 20:10 do dia 22/05/2013.',
    status: 'aberto',
    agente_id: '8ecc5e86-ffe2-4ee0-9815-9913aea9b961'
  },
  {
    id: '969a8eb5-6d76-4dc3-a07f-1f91a56f0b9a',
    titulo: 'roubo',
    descricao: 'Assalto a residência no bairro Alto às 02:00 do dia 10/09/2016.',
    status: 'solucionado',
    agente_id: '40261691-4e90-4f4c-b406-a34acb7e2a63'
  },
  {
    id: 'e715df56-ed77-41fb-9974-f30c92d6e996',
    titulo: 'sequestro',
    descricao: 'Sequestro de veículo na estrada rural às 18:40 do dia 07/12/2022.',
    status: 'em andamento',
    agente_id: '24ba6b19-6a6b-4f9e-90ab-445b169952b7'
  },
  {
    id: '71e23297-5490-4e45-95bb-65ce6040e9b0',
    titulo: 'furto',
    descricao: 'Furto de bicicleta em praça pública às 13:30 do dia 19/10/2014.',
    status: 'aberto',
    agente_id: 'cf0e5183-050e-46f0-af80-5f467c60919c'
  },
  {
    id: '95e1c394-635b-459b-95ca-85571609dc6d',
    titulo: 'homicidio',
    descricao: 'Homicídio no bairro Industrial às 00:15 do dia 28/03/2011.',
    status: 'solucionado',
    agente_id: 'e462dfbd-9142-454b-a834-80cd3168b759'
  },
  {
    id: '538475bb-81e4-4a06-8637-b3c003b26af6',
    titulo: 'roubo',
    descricao: 'Assalto a joalheria no centro às 11:00 do dia 15/06/2018.',
    status: 'aberto',
    agente_id: 'e462dfbd-9142-454b-a834-80cd3168b759'
  },
  {
    id: '4461d148-99ea-4c69-adf8-463ea5549718',
    titulo: 'furto',
    descricao: 'Furto de celular em transporte público às 08:45 do dia 03/04/2020.',
    status: 'solucionado',
    agente_id: 'e462dfbd-9142-454b-a834-80cd3168b759'
  },
  {
    id: 'b99c825f-2553-4dca-80a2-efd5b2eb84bf',
    titulo: 'sequestro',
    descricao: 'Sequestro relâmpago no bairro Central às 22:00 do dia 12/07/2015.',
    status: 'em andamento',
    agente_id: 'e462dfbd-9142-454b-a834-80cd3168b759'
  },
  {
    id: '41972752-7ee2-4ff1-9f02-5324d2f09bd6',
    titulo: 'homicidio',
    descricao: 'Crime passional registrado no bairro Sul às 19:30 do dia 25/08/2019.',
    status: 'aberto',
    agente_id: 'e462dfbd-9142-454b-a834-80cd3168b759'
  },
  {
    id: '3bafc60d-428c-4060-983a-149abb146978',
    titulo: 'roubo',
    descricao: 'Assalto a supermercado no bairro Oeste às 16:50 do dia 09/02/2023.',
    status: 'solucionado',
    agente_id: 'e462dfbd-9142-454b-a834-80cd3168b759'
  },
  {
    id: '4078e974-88c7-4d50-a79e-5d6f01d6e4ca',
    titulo: 'furto',
    descricao: 'Furto de carteira em evento público às 20:00 do dia 17/05/2017.',
    status: 'aberto',
    agente_id: 'e462dfbd-9142-454b-a834-80cd3168b759'
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
    let resp = null;

    let casoadicionar = {
        "id": uuidv4(),
        "titulo": titulo,
        "descricao": descricao,
        "status": status,
        "agente_id": agente_id
    }

    casos.push(casoadicionar);
    resp = casoadicionar;
    
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
    let resp = null;
    let i = casos.findIndex((item) => item.id == id);
    if(i > -1){
        casos[i].titulo = titulo;
        casos[i].descricao = descricao;
        casos[i].status = status;
        casos[i].agente_id = agente_id;
        resp = casos[i];
    }

    return resp;
}

function atualizarParcialCaso(id, titulo = null, descricao = null, status = null, agente_id = undefined){
    let resp = null;
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
        resp = casos[i];
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
