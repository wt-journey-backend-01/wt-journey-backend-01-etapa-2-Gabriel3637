const {v4: uuidv4} = require('uuid');


const casos = [
  {
    id: '58260de7-7be3-4d02-94e4-4c8f51b5fe59',
    titulo: 'homicidio',
    descricao: 'Disparos foram reportados às 22:33 do dia 10/07/2007 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.',
    status: 'aberto',
    agente_id: '401bccf5-cf9e-489d-8412-446cd169a0f1'
  },
  {
    id: '43b1333d-c8b3-41d8-a61c-d51891baa048',
    titulo: 'roubo',
    descricao: 'Assalto a mão armada em uma loja de conveniência no centro às 19:15 do dia 12/08/2010.',
    status: 'solucionado',
    agente_id: '5e6d7f8a-9b0c-4c1e-a2b3-557de270b1f2'
  },
  {
    id: 'e7cf9a73-7a4d-4869-87aa-ed6189ab4b1c',
    titulo: 'homicidio',
    descricao: 'Crime ocorrido em uma residência no bairro Jardins às 03:00 do dia 15/09/2015.',
    status: 'aberto',
    agente_id: '6f8e9a0b-1c2d-4e3f-b4a5-668ef381c2f3'
  },
  {
    id: '2777424f-f9a6-4040-8b0c-cde4c1d37006',
    titulo: 'furto',
    descricao: 'Furto de veículo na rua principal do bairro São José às 14:20 do dia 20/11/2018.',
    status: 'aberto',
    agente_id: '7a9f0b1c-2d3e-5f4a-c5b6-779f492d3e4f'
  },
  {
    id: '7f08011e-d4a3-43eb-8e82-dc9f8321e1da',
    titulo: 'roubo',
    descricao: 'Assalto a pedestres no parque municipal às 17:45 do dia 05/03/2020.',
    status: 'solucionado',
    agente_id: '8b0c1d2e-3f4a-6b5c-d6e7-88a0504e4f5a'
  },
  {
    id: 'd3035f18-5c5f-4fee-99ca-348007647442',
    titulo: 'homicidio',
    descricao: 'Incidente com vítima fatal no bairro Centro às 23:50 do dia 18/04/2012.',
    status: 'aberto',
    agente_id: '401bccf5-cf9e-489d-8412-446cd169a0f1'
  },
  {
    id: 'ddb8216f-f192-4d99-86f5-426da32a205a',
    titulo: 'sequestro',
    descricao: 'Sequestro relatado na rodovia estadual às 21:00 do dia 25/06/2019.',
    status: 'em andamento',
    agente_id: '9c1d2e3f-4a5b-7c6d-e7f8-99b1615f5a6b'
  },
  {
    id: 'c988369f-6b57-4361-abe3-e51941b85955',
    titulo: 'roubo',
    descricao: 'Assalto a banco no centro da cidade às 10:30 do dia 30/01/2017.',
    status: 'solucionado',
    agente_id: '0d2e3f4a-5b6c-8d7e-f8a9-aac272605b7c'
  },
  {
    id: '0511c303-ba28-4148-82b1-3a964b3f2664',
    titulo: 'furto',
    descricao: 'Furto de objetos pessoais em um shopping às 16:00 do dia 14/02/2021.',
    status: 'aberto',
    agente_id: '1e3f4a5b-6c7d-9e8f-a9b0-bbd383716c8d'
  },
  {
    id: '2b200260-9549-46fd-8af2-f61d26fa203e',
    titulo: 'homicidio',
    descricao: 'Crime registrado em um bar no bairro Vila Nova às 20:10 do dia 22/05/2013.',
    status: 'aberto',
    agente_id: '2f4a5b6c-7d8e-0a9f-b0c1-cce494827d9e'
  },
  {
    id: '969a8eb5-6d76-4dc3-a07f-1f91a56f0b9a',
    titulo: 'roubo',
    descricao: 'Assalto a residência no bairro Alto às 02:00 do dia 10/09/2016.',
    status: 'solucionado',
    agente_id: '401bccf5-cf9e-489d-8412-446cd169a0f1'
  },
  {
    id: 'e715df56-ed77-41fb-9974-f30c92d6e996',
    titulo: 'sequestro',
    descricao: 'Sequestro de veículo na estrada rural às 18:40 do dia 07/12/2022.',
    status: 'em andamento',
    agente_id: '3a5b6c7d-8e9f-1b0a-c1d2-ddf5a5938e0a'
  },
  {
    id: '71e23297-5490-4e45-95bb-65ce6040e9b0',
    titulo: 'furto',
    descricao: 'Furto de bicicleta em praça pública às 13:30 do dia 19/10/2014.',
    status: 'aberto',
    agente_id: '4b6c7d8e-9f0a-2c1b-d2e3-eea6b6a49f1b'
  },
  {
    id: '95e1c394-635b-459b-95ca-85571609dc6d',
    titulo: 'homicidio',
    descricao: 'Homicídio no bairro Industrial às 00:15 do dia 28/03/2011.',
    status: 'solucionado',
    agente_id: '5c7d8e9f-0a1b-3d2c-e3f4-ffb7c7b5a02c'
  },
  {
    id: '538475bb-81e4-4a06-8637-b3c003b26af6',
    titulo: 'roubo',
    descricao: 'Assalto a joalheria no centro às 11:00 do dia 15/06/2018.',
    status: 'aberto',
    agente_id: '6d8e9f0a-1b2c-4e3d-f4a5-00c8d8c6b13d'
  },
  {
    id: '4461d148-99ea-4c69-adf8-463ea5549718',
    titulo: 'furto',
    descricao: 'Furto de celular em transporte público às 08:45 do dia 03/04/2020.',
    status: 'solucionado',
    agente_id: '7e9f0a1b-2c3d-5f4e-a5b6-11d9e9d7c24e'
  },
  {
    id: 'b99c825f-2553-4dca-80a2-efd5b2eb84bf',
    titulo: 'sequestro',
    descricao: 'Sequestro relâmpago no bairro Central às 22:00 do dia 12/07/2015.',
    status: 'em andamento',
    agente_id: '8f0a1b2c-3d4e-6a5f-b6c7-22eafa08d35f'
  },
  {
    id: '41972752-7ee2-4ff1-9f02-5324d2f09bd6',
    titulo: 'homicidio',
    descricao: 'Crime passional registrado no bairro Sul às 19:30 do dia 25/08/2019.',
    status: 'aberto',
    agente_id: '401bccf5-cf9e-489d-8412-446cd169a0f1'
  },
  {
    id: '3bafc60d-428c-4060-983a-149abb146978',
    titulo: 'roubo',
    descricao: 'Assalto a supermercado no bairro Oeste às 16:50 do dia 09/02/2023.',
    status: 'solucionado',
    agente_id: '9a1b2c3d-4e5f-7b6a-c7d8-33fb0b19e46a'
  },
  {
    id: '4078e974-88c7-4d50-a79e-5d6f01d6e4ca',
    titulo: 'furto',
    descricao: 'Furto de carteira em evento público às 20:00 do dia 17/05/2017.',
    status: 'aberto',
    agente_id: '0b2c3d4e-5f6a-8c7b-d8e9-44ac1c2af57b'
  }
]

function findAll(filtro = null, ordenacao = null) {
    let casosCopia = [...casos];

    if(filtro){
        if(filtro.colunaId){
            casosCopia = casosCopia.filter((item) => item.id == filtro.colunaId)
        }
        if(filtro.colunaTitulo){
            casosCopia = casosCopia.filter((item) => item.titulo == filtro.colunaTitulo)
        }
        if(filtro.colunaDescricao){
            casosCopia = casosCopia.filter((item) => item.descricao == filtro.colunaDescricao)
        }
        if(filtro.colunaStatus){
            casosCopia = casosCopia.filter((item) => item.status == filtro.colunaStatus)
        }
        if(filtro.colunaAgenteId){
            casosCopia = casosCopia.filter((item) => item.agente_id == filtro.colunaAgenteId)
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
    if(i < casos.length && i == 0){
        casos.splice(i, 1);
        resp = true;
    }
    return resp;
}

function atualizarCaso(id, novoid, titulo, descricao, status, agente_id){
    let resp = false;
    let i = casos.findIndex((item) => item.id == id);
    if(i > -1){
        casos[i].id = novoid;
        casos[i].titulo = titulo;
        casos[i].descricao = descricao;
        casos[i].status = status;
        casos[i].agente_id = agente_id;
        resp = true;
    }

    return resp;
}

function atualizarParcialCaso(id, novoid = null, titulo = null, descricao = null, status = null, agente_id = undefined){
    let resp = false;
    let i = casos.findIndex((item) => item.id == id);
    if(i > -1){
        if(novoid){
            casos[i].id = novoid;
        }
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




module.exports = {
    findAll,
    findIndex,
    findId,
    criarCaso,
    removerCasoId,
    removerCasoIndex,
    atualizarCaso,
    atualizarParcialCaso
}
