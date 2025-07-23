const casos = [
    {
        id: "f5fb2ad5-22a8-4cb4-90f2-8733517a0d46",
        titulo: "homicidio",
        descricao: "Disparos foram reportados às 22:33 do dia 10/07/2007 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.",
        status: "aberto",
        agente_id: "401bccf5-cf9e-489d-8412-446cd169a0f1"
    },
    {
        id: "1a2b3c4d-5e6f-7890-a1b2-c3d4e5f6a7b8",
        titulo: "roubo",
        descricao: "Assalto a mão armada em uma loja de conveniência no centro às 19:15 do dia 12/08/2010.",
        status: "solucionado",
        agente_id: "5e6d7f8a-9b0c-4c1e-a2b3-557de270b1f2"
    },
    {
        id: "2b3c4d5e-6f7a-8901-b2c3-d4e5f6a7b8c9",
        titulo: "homicidio",
        descricao: "Crime ocorrido em uma residência no bairro Jardins às 03:00 do dia 15/09/2015.",
        status: "aberto",
        agente_id: "6f8e9a0b-1c2d-4e3f-b4a5-668ef381c2f3"
    },
    {
        id: "3c4d5e6f-7a8b-9012-c3d4-e5f6a7b8c9da",
        titulo: "furto",
        descricao: "Furto de veículo na rua principal do bairro São José às 14:20 do dia 20/11/2018.",
        status: "aberto",
        agente_id: "7a9f0b1c-2d3e-5f4a-c5b6-779f492d3e4f"
    },
    {
        id: "4d5e6f7a-8b9c-0123-d4e5-f6a7b8c9daeb",
        titulo: "roubo",
        descricao: "Assalto a pedestres no parque municipal às 17:45 do dia 05/03/2020.",
        status: "solucionado",
        agente_id: "8b0c1d2e-3f4a-6b5c-d6e7-88a0504e4f5a"
    },
    {
        id: "5e6f7a8b-9c0d-1234-e5f6-a7b8c9daeb0f",
        titulo: "homicidio",
        descricao: "Incidente com vítima fatal no bairro Centro às 23:50 do dia 18/04/2012.",
        status: "aberto",
        agente_id: "401bccf5-cf9e-489d-8412-446cd169a0f1"
    },
    {
        id: "6f7a8b9c-0d1e-2345-f6a7-b8c9daeb0f1a",
        titulo: "sequestro",
        descricao: "Sequestro relatado na rodovia estadual às 21:00 do dia 25/06/2019.",
        status: "em andamento",
        agente_id: "9c1d2e3f-4a5b-7c6d-e7f8-99b1615f5a6b"
    },
    {
        id: "7a8b9c0d-1e2f-3456-a7b8-c9daeb0f1a2b",
        titulo: "roubo",
        descricao: "Assalto a banco no centro da cidade às 10:30 do dia 30/01/2017.",
        status: "solucionado",
        agente_id: "0d2e3f4a-5b6c-8d7e-f8a9-aac272605b7c"
    },
    {
        id: "8b9c0d1e-2f3a-4567-b8c9-daeb0f1a2b3c",
        titulo: "furto",
        descricao: "Furto de objetos pessoais em um shopping às 16:00 do dia 14/02/2021.",
        status: "aberto",
        agente_id: "1e3f4a5b-6c7d-9e8f-a9b0-bbd383716c8d"
    },
    {
        id: "9c0d1e2f-3a4b-5678-c9da-eb0f1a2b3c4d",
        titulo: "homicidio",
        descricao: "Crime registrado em um bar no bairro Vila Nova às 20:10 do dia 22/05/2013.",
        status: "aberto",
        agente_id: "2f4a5b6c-7d8e-0a9f-b0c1-cce494827d9e"
    },
    {
        id: "0d1e2f3a-4b5c-6789-daeb-0f1a2b3c4d5e",
        titulo: "roubo",
        descricao: "Assalto a residência no bairro Alto às 02:00 do dia 10/09/2016.",
        status: "solucionado",
        agente_id: "401bccf5-cf9e-489d-8412-446cd169a0f1"
    },
    {
        id: "1e2f3a4b-5c6d-7890-eb0f-1a2b3c4d5e6f",
        titulo: "sequestro",
        descricao: "Sequestro de veículo na estrada rural às 18:40 do dia 07/12/2022.",
        status: "em andamento",
        agente_id: "3a5b6c7d-8e9f-1b0a-c1d2-ddf5a5938e0a"
    },
    {
        id: "2f3a4b5c-6d7e-8901-f0a2-2b3c4d5e6f7a",
        titulo: "furto",
        descricao: "Furto de bicicleta em praça pública às 13:30 do dia 19/10/2014.",
        status: "aberto",
        agente_id: "4b6c7d8e-9f0a-2c1b-d2e3-eea6b6a49f1b"
    },
    {
        id: "3a4b5c6d-7e8f-9012-a2b3-3c4d5e6f7a8b",
        titulo: "homicidio",
        descricao: "Homicídio no bairro Industrial às 00:15 do dia 28/03/2011.",
        status: "solucionado",
        agente_id: "5c7d8e9f-0a1b-3d2c-e3f4-ffb7c7b5a02c"
    },
    {
        id: "4b5c6d7e-8f9a-0123-b3c4-4d5e6f7a8b9c",
        titulo: "roubo",
        descricao: "Assalto a joalheria no centro às 11:00 do dia 15/06/2018.",
        status: "aberto",
        agente_id: "6d8e9f0a-1b2c-4e3d-f4a5-00c8d8c6b13d"
    },
    {
        id: "5c6d7e8f-9a0b-1234-c4d5-5e6f7a8b9c0d",
        titulo: "furto",
        descricao: "Furto de celular em transporte público às 08:45 do dia 03/04/2020.",
        status: "solucionado",
        agente_id: "7e9f0a1b-2c3d-5f4e-a5b6-11d9e9d7c24e"
    },
    {
        id: "6d7e8f9a-0b1c-2345-d5e6-6f7a8b9c0d1e",
        titulo: "sequestro",
        descricao: "Sequestro relâmpago no bairro Central às 22:00 do dia 12/07/2015.",
        status: "em andamento",
        agente_id: "8f0a1b2c-3d4e-6a5f-b6c7-22eafa08d35f"
    },
    {
        id: "7e8f9a0b-1c2d-3456-e6f7-7a8b9c0d1e2f",
        titulo: "homicidio",
        descricao: "Crime passional registrado no bairro Sul às 19:30 do dia 25/08/2019.",
        status: "aberto",
        agente_id: "401bccf5-cf9e-489d-8412-446cd169a0f1"
    },
    {
        id: "8f9a0b1c-2d3e-4567-f7a8-8b9c0d1e2f3a",
        titulo: "roubo",
        descricao: "Assalto a supermercado no bairro Oeste às 16:50 do dia 09/02/2023.",
        status: "solucionado",
        agente_id: "9a1b2c3d-4e5f-7b6a-c7d8-33fb0b19e46a"
    },
    {
        id: "9a0b1c2d-3e4f-5678-a8b9-9c0d1e2f3a4b",
        titulo: "furto",
        descricao: "Furto de carteira em evento público às 20:00 do dia 17/05/2017.",
        status: "aberto",
        agente_id: "0b2c3d4e-5f6a-8c7b-d8e9-44ac1c2af57b"
    }
]

function findAll(filtro = null, ordenacao = null) {
    let casosCopia = [...casos];

    if(filtro){
        if(filtro.colunaId){
            casosCopia = casosCopia.filter((item) => item.id == filtro.colunaId)
        }
        if(filtro.colunaTitulo){
            casosCopia = casosCopia.filter((item) => item.id == filtro.colunaTitulo)
        }
        if(filtro.colunaDescricao){
            casosCopia = casosCopia.filter((item) => item.id == filtro.colunaDescricao)
        }
        if(filtro.colunaStatus){
            casosCopia = casosCopia.filter((item) => item.id == filtro.colunaStatus)
        }
        if(filtro.colunaAgenteId){
            casosCopia = casosCopia.filter((item) => item.id == filtro.colunaAgenteId)
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

function criarCaso(id, titulo, descricao, status, agente_id){
    let resp = false;

    let casoadicionar = {
        "id": id,
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
