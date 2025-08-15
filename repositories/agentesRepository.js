const {v4: uuidv4} = require('uuid');
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
    cargo: 'inspetor'
  },
  {
    id: '4a2b567e-af28-4687-a375-c4e531c23303',
    nome: 'Rommel Carneiro',
    dataDeIncorporacao: '1995-03-22',
    cargo: 'delegado'
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
    cargo: 'inspetor'
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
    cargo: 'delegado'
  },
  {
    id: '553f2b26-331e-4302-97d8-fb5b9a95cba8',
    nome: 'Marcos Lima',
    dataDeIncorporacao: '2000-05-12',
    cargo: 'inspetor'
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
    cargo: 'delegado'
  },
  {
    id: 'd2fc4859-ded7-49d3-b261-be26990978e1',
    nome: 'Fernanda Oliveira',
    dataDeIncorporacao: '2003-04-10',
    cargo: 'inspetor'
  },
  {
    id: 'a8d631fc-bb93-4ba4-b78f-f98de428441f',
    nome: 'Rommel Carneiro',
    dataDeIncorporacao: '2010-07-19',
    cargo: 'delegado'
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
    cargo: 'inspetor'
  },
  {
    id: '891a1eb4-f3ed-4605-b862-34c18319d9c9',
    nome: 'Mariana Rocha',
    dataDeIncorporacao: '2015-09-25',
    cargo: 'delegado'
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
    cargo: 'inspetor'
  },
  {
    id: 'f44dacca-e958-4b5b-90fd-c535ff8c0bb8',
    nome: 'Rommel Carneiro',
    dataDeIncorporacao: '2000-05-12',
    cargo: 'delegado'
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
    cargo: 'inspetor'
  }
];

function read(filtro = null, ordenacao = null, direcao = null) {
  try{
    let agentescopia = [...agentes];
    if (filtro.id)
        agentescopia = agentescopia.filter((item) => item.id.toLowerCase() == filtro.id.toLowerCase());
    if (filtro.nome)
        agentescopia = agentescopia.filter((item) => item.nome.toLowerCase() == filtro.nome.toLowerCase());
    if (filtro.dataDeIncorporacao)
        agentescopia = agentescopia.filter((item) => item.dataDeIncorporacao == filtro.dataDeIncorporacao);
    if (filtro.cargo)
        agentescopia = agentescopia.filter((item) => item.cargo.toLowerCase() == filtro.cargo.toLowerCase());
    
    if(direcao == 'DESC'){
        switch(ordenacao){
            case "id":
                agentescopia.sort((a, b) => b.id.localeCompare(a.id, 'pt-BR', { sensitivity: 'base' }));
                break;
            case "nome":
                agentescopia.sort((a, b) => b.nome.localeCompare(a.nome, 'pt-BR', { sensitivity: 'base' }));
                break;
            case "dataDeIncorporacao":
                agentescopia.sort((a, b) => {
                    let colunaA = new Date(a.dataDeIncorporacao);
                    let colunaB = new Date(b.dataDeIncorporacao);
                    return colunaB - colunaA;
                });
                break;
            case "cargo":
                agentescopia.sort((a, b) => b.cargo.localeCompare(a.cargo, 'pt-BR', { sensitivity: 'base' }));
                break;
            default:
                agentescopia = agentescopia;
                break;
        }
    } else if( direcao == 'ASC'){
        switch(ordenacao){
            case "id":
                agentescopia.sort((a, b) => a.id.localeCompare(b.id, 'pt-BR', { sensitivity: 'base' }));
                break;
            case "nome":
                agentescopia.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR', { sensitivity: 'base' }));
                break;
            case "dataDeIncorporacao":
                agentescopia.sort((a, b) => {
                    let colunaA = new Date(a.dataDeIncorporacao);
                    let colunaB = new Date(b.dataDeIncorporacao);
                    return colunaA - colunaB;
                });
                break;
            case "cargo":
                agentescopia.sort((a, b) =>  a.cargo.localeCompare(b.cargo, 'pt-BR', { sensitivity: 'base' }));
                break;
            default:
                agentescopia = agentescopia;
                break;
        }
    } 
    return agentescopia
  }catch(err){
    console.log(err)
    return false;
  }
}

function findId(id){
    let resp;
    if(resp = agentes.find((item) => item.id == id)){
        return resp
    } else {
        return null;
    }
}

function create(objAgente){
    
  try{
    let resp = null;

    let agenteadicionar = {
        "id": uuidv4(),
        "nome": objAgente.nome,
        "dataDeIncorporacao": objAgente.dataDeIncorporacao,
        "cargo": objAgente.cargo
    }

    agentes.push(agenteadicionar);
    resp = agenteadicionar;
    return resp;
  } catch(err){
    console.log(err)
    return false;
  }
}

function remove(id){
    
  try{
    let resp = 0;
    let i = agentes.findIndex((item) => item.id == id);
    if(i > -1){
      agentes.splice(i, 1);
      resp = 1;
    }
    return resp;
  }catch(err){
    console.log(err);
    return false;
  }
}

function update(id, objAgente){
  try{
    let resp = null;
    let i = agentes.findIndex((item) => item.id == id);
    if(i > -1){
      if(objAgente.nome){
          agentes[i].nome = objAgente.nome;
      }
      if(objAgente.dataDeIncorporacao){
          agentes[i].dataDeIncorporacao = objAgente.dataDeIncorporacao;
      }
      if(objAgente.cargo){
          agentes[i].cargo = objAgente.cargo;
      }
      resp = agentes[i];
    }
    return resp;
  } catch(err){
    console.log(err);
    return false;
  }
}

module.exports = {
    findId,
    read,
    create,
    update,
    remove
}
