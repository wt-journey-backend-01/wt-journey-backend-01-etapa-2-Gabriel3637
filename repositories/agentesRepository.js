const agentes = [
  {
    "id": "401bccf5-cf9e-489d-8412-446cd169a0f1",
    "nome": "Rommel Carneiro",
    "dataDeIncorporacao": "1992/10/04",
    "cargo": "delegado"
  },
  {
    "id": "5e6d7f8a-9b0c-4c1e-a2b3-557de270b1f2",
    "nome": "Ana Silva",
    "dataDeIncorporacao": "2000/05/12",
    "cargo": "investigador"
  },
  {
    "id": "6f8e9a0b-1c2d-4e3f-b4a5-668ef381c2f3",
    "nome": "Rommel Carneiro",
    "dataDeIncorporacao": "1995/03/22",
    "cargo": "escrivao"
  },
  {
    "id": "7a9f0b1c-2d3e-5f4a-c5b6-779f492d3e4f",
    "nome": "Carlos Mendes",
    "dataDeIncorporacao": "1992/10/04",
    "cargo": "delegado"
  },
  {
    "id": "8b0c1d2e-3f4a-6b5c-d6e7-88a0504e4f5a",
    "nome": "Beatriz Costa",
    "dataDeIncorporacao": "2010/07/19",
    "cargo": "investigador"
  },
  {
    "id": "9c1d2e3f-4a5b-7c6d-e7f8-99b1615f5a6b",
    "nome": "Rommel Carneiro",
    "dataDeIncorporacao": "2005/11/30",
    "cargo": "delegado"
  },
  {
    "id": "0d2e3f4a-5b6c-8d7e-f8a9-aac272605b7c",
    "nome": "Juliana Pereira",
    "dataDeIncorporacao": "1998/02/15",
    "cargo": "escrivao"
  },
  {
    "id": "1e3f4a5b-6c7d-9e8f-a9b0-bbd383716c8d",
    "nome": "Marcos Lima",
    "dataDeIncorporacao": "2000/05/12",
    "cargo": "investigador"
  },
  {
    "id": "2f4a5b6c-7d8e-0a9f-b0c1-cce494827d9e",
    "nome": "Ana Silva",
    "dataDeIncorporacao": "2015/09/25",
    "cargo": "delegado"
  },
  {
    "id": "3a5b6c7d-8e9f-1b0a-c1d2-ddf5a5938e0a",
    "nome": "Pedro Almeida",
    "dataDeIncorporacao": "1992/10/04",
    "cargo": "escrivao"
  },
  {
    "id": "4b6c7d8e-9f0a-2c1b-d2e3-eea6b6a49f1b",
    "nome": "Fernanda Oliveira",
    "dataDeIncorporacao": "2003/04/10",
    "cargo": "investigador"
  },
  {
    "id": "5c7d8e9f-0a1b-3d2c-e3f4-ffb7c7b5a02c",
    "nome": "Rommel Carneiro",
    "dataDeIncorporacao": "2010/07/19",
    "cargo": "escrivao"
  },
  {
    "id": "6d8e9f0a-1b2c-4e3d-f4a5-00c8d8c6b13d",
    "nome": "Lucas Souza",
    "dataDeIncorporacao": "1995/03/22",
    "cargo": "delegado"
  },
  {
    "id": "7e9f0a1b-2c3d-5f4e-a5b6-11d9e9d7c24e",
    "nome": "Ana Silva",
    "dataDeIncorporacao": "2005/11/30",
    "cargo": "investigador"
  },
  {
    "id": "8f0a1b2c-3d4e-6a5f-b6c7-22eafa08d35f",
    "nome": "Mariana Rocha",
    "dataDeIncorporacao": "2015/09/25",
    "cargo": "escrivao"
  },
  {
    "id": "9a1b2c3d-4e5f-7b6a-c7d8-33fb0b19e46a",
    "nome": "Carlos Mendes",
    "dataDeIncorporacao": "1998/02/15",
    "cargo": "delegado"
  },
  {
    "id": "0b2c3d4e-5f6a-8c7b-d8e9-44ac1c2af57b",
    "nome": "Beatriz Costa",
    "dataDeIncorporacao": "2003/04/10",
    "cargo": "investigador"
  },
  {
    "id": "1c3d4e5f-6a7b-9d8c-e9f0-55bd2d3ba68c",
    "nome": "Rommel Carneiro",
    "dataDeIncorporacao": "2000/05/12",
    "cargo": "escrivao"
  },
  {
    "id": "2d4e5f6a-7b8c-0e9d-f0a1-66ce3e4cb79d",
    "nome": "Ana Silva",
    "dataDeIncorporacao": "2010/07/19",
    "cargo": "delegado"
  },
  {
    "id": "3e5f6a7b-8c9d-1f0e-a1b2-77df4f5dc8ae",
    "nome": "Paulo Santos",
    "dataDeIncorporacao": "1992/10/04",
    "cargo": "investigador"
  }
];

function findAll(filtro = null, ordenacao = null) {
    let agentescopia = [...agentes];
    if(filtro){
        if (filtro.colunaId){
            agentescopia = agentescopia.filter((item) => item.id == filtro.colunaId);
        }
        if (filtro.colunaNome){
            agentescopia = agentescopia.filter((item) => item.nome == filtro.colunaNome);
        }
        if (filtro.colunaDataDeIncorporacao){
            agentescopia = agentescopia.filter((item) => item.dataDeIncorporacao == filtro.colunaDataDeIncorporacao);
        }
        if (filtro.colunaCargo){
            agentescopia = agentescopia.filter((item) => item.cargo == filtro.colunaCargo);
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
                    console.log("Teste");
                    agentescopia.sort((a, b) => {
                        let colunaA = a.dataDeIncorporacao.toLowerCase();
                        let colunaB = b.dataDeIncorporacao.toLowerCase();
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
                        let colunaA = a.dataDeIncorporacao.toLowerCase();
                        let colunaB = b.dataDeIncorporacao.toLowerCase();
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

function criarAgente(id, nome, data, cargo){
    let resp = false;

    let agenteadicionar = {
        "id": id,
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
    if(i < agentes.length && i == 0){
        agentes.splice(i, 1);
        resp = true;
    }
    return resp;
}

function atualizarAgente(id, novoId, nome, data, cargo){
    let resp = false;
    let i = agentes.findIndex((item) => item.id == id);
    if(i > -1){
        agentes[i].id = novoId;
        agentes[i].nome = nome;
        agentes[i].dataDeIncorporacao = data;
        agentes[i].cargo = cargo;
        resp = true;
    }

    return resp;
}

function atualizarParcialAgente(id, novoId = null, nome = null, data = null, cargo = null){
    let resp = false;
    let i = agentes.findIndex((item) => item.id == id);
    if(i > -1){
        if(novoId){
            agentes[i].id = novoId;
        }
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
