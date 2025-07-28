const {v4: uuidv4, validate: validate} = require('uuid');
const agentes = [
  {
    id: '4dcd8f2a-1a2f-4786-af0a-d7baee70f270',
    nome: 'Rommel Carneiro',
    dataDeIncorporacao: '1992-10-04',
    cargo: 'delegado'
  },
  {
    id: 'c93dea02-c8dd-4fa6-bba5-2bc2661dbff8',
    nome: 'Ana Silva',
    dataDeIncorporacao: '2000-05-12',
    cargo: 'investigador'
  },
  {
    id: '4a2b567e-af28-4687-a375-c4e531c23303',
    nome: 'Rommel Carneiro',
    dataDeIncorporacao: '1995-03-22',
    cargo: 'escrivao'
  },
  {
    id: '2bf83017-8e0d-43c5-b3b1-6ee98b4fdac2',
    nome: 'Carlos Mendes',
    dataDeIncorporacao: '1992-10-04',
    cargo: 'delegado'
  },
  {
    id: '1948520c-8cd5-4d4b-8600-a59c48453d16',
    nome: 'Beatriz Costa',
    dataDeIncorporacao: '2010-07-19',
    cargo: 'investigador'
  },
  {
    id: '5d592c77-29c5-41f9-988b-0d7911050967',
    nome: 'Rommel Carneiro',
    dataDeIncorporacao: '2005-11-30',
    cargo: 'delegado'
  },
  {
    id: 'f7a3ff65-5046-4ee1-8e39-c2057b2aec57',
    nome: 'Juliana Pereira',
    dataDeIncorporacao: '1998-02-15',
    cargo: 'escrivao'
  },
  {
    id: '553f2b26-331e-4302-97d8-fb5b9a95cba8',
    nome: 'Marcos Lima',
    dataDeIncorporacao: '2000-05-12',
    cargo: 'investigador'
  },
  {
    id: '0a2df2ca-d8a0-4aa3-a107-910d61711707',
    nome: 'Ana Silva',
    dataDeIncorporacao: '2015-09-25',
    cargo: 'delegado'
  },
  {
    id: '0da30720-9197-4c2c-acca-dab395840fb2',
    nome: 'Pedro Almeida',
    dataDeIncorporacao: '1992-10-04',
    cargo: 'escrivao'
  },
  {
    id: 'd2fc4859-ded7-49d3-b261-be26990978e1',
    nome: 'Fernanda Oliveira',
    dataDeIncorporacao: '2003-04-10',
    cargo: 'investigador'
  },
  {
    id: 'a8d631fc-bb93-4ba4-b78f-f98de428441f',
    nome: 'Rommel Carneiro',
    dataDeIncorporacao: '2010-07-19',
    cargo: 'escrivao'
  },
  {
    id: 'f0ee7c1c-9a22-4464-a9cd-bb96ffe41293',
    nome: 'Lucas Souza',
    dataDeIncorporacao: '1995-03-22',
    cargo: 'delegado'
  },
  {
    id: '8ecc5e86-ffe2-4ee0-9815-9913aea9b961',
    nome: 'Ana Silva',
    dataDeIncorporacao: '2005-11-30',
    cargo: 'investigador'
  },
  {
    id: '891a1eb4-f3ed-4605-b862-34c18319d9c9',
    nome: 'Mariana Rocha',
    dataDeIncorporacao: '2015-09-25',
    cargo: 'escrivao'
  },
  {
    id: '40261691-4e90-4f4c-b406-a34acb7e2a63',
    nome: 'Carlos Mendes',
    dataDeIncorporacao: '1998-02-15',
    cargo: 'delegado'
  },
  {
    id: '24ba6b19-6a6b-4f9e-90ab-445b169952b7',
    nome: 'Beatriz Costa',
    dataDeIncorporacao: '2003-04-10',
    cargo: 'investigador'
  },
  {
    id: 'f44dacca-e958-4b5b-90fd-c535ff8c0bb8',
    nome: 'Rommel Carneiro',
    dataDeIncorporacao: '2000-05-12',
    cargo: 'escrivao'
  },
  {
    id: 'cf0e5183-050e-46f0-af80-5f467c60919c',
    nome: 'Ana Silva',
    dataDeIncorporacao: '2010-07-19',
    cargo: 'delegado'
  },
  {
    id: 'e462dfbd-9142-454b-a834-80cd3168b759',
    nome: 'Paulo Santos',
    dataDeIncorporacao: '1992-10-04',
    cargo: 'investigador'
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
    let resp = null;

    let agenteadicionar = {
        "id": uuidv4(),
        "nome": nome,
        "dataDeIncorporacao": data,
        "cargo": cargo
    }

    agentes.push(agenteadicionar);
    resp = agenteadicionar;
    
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
