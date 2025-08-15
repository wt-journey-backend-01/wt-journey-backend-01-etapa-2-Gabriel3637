const casosRepository = require("../repositories/casosRepository");
const agentesRepository = require("../repositories/agentesRepository");
const {validate: validate} = require("uuid");


function validateAgenteId(corpoCaso){

    let erro = {
            status: 404,
            message: "Agente inexistente",
            errors: {
                id: "Não existe agente com esse id"
            }
        }
    if(corpoCaso.agente_id && !validate(corpoCaso.agente_id)){
        return erro;
    }
    let agenteResponsavel = agentesRepository.findId(corpoCaso.agente_id);
    if(!agenteResponsavel){
        return erro;
    }

    return null;

}

function validateRepository(repositoryResponse, statusCode, res){
    if(repositoryResponse === null){
        return res.status(404).json({
            status: 404,
            message: "Caso inexistente",
            errors: {
                id: "Não existe caso com esse id"
            }
        })
    } else if(repositoryResponse === false)
        return res.status(500).send()
    else{
        return res.status(statusCode).json(repositoryResponse);
    }
}

function getAllCasos(req, res) {
    const ordenar = req.query.sort;
    const {id, titulo, descricao, status, agente_id} = req.query;
    let filtro = {}
    let direcao = null
    if(id)
        filtro.id = id;
    if(titulo)
        filtro.titulo = titulo;
    if(descricao)
        filtro.descricao = descricao;
    if(status)
        filtro.status = status;
    if(agente_id)
        filtro.agente_id = agente_id;

    if(ordenar){
        if(ordenar[0] == '-'){
            ordenar = ordenar.slice(1);
            direcao = 'DESC';
        } else {
            direcao = 'ASC'
        }
    }

    const casos = casosRepository.read(filtro, ordenar, direcao)
    return validateRepository(casos, 200, res)
}

function getCaso(req, res){
    let idCaso = req.params.id;

    let casoEncontrado = casosRepository.findId(idCaso);

    return validateRepository(casoEncontrado, 200, res)
}

function postCaso(req, res){

    corpoCaso = req.body;
    
    if(corpoCaso.agente_id){
        erro = validateAgenteId(corpoCaso);
        if(erro){
            return res.status(404).json(erro);
        }
    }

    let resultado = casosRepository.create(corpoCaso);

    return validateRepository(resultado, 201, res);
}

function putCaso(req, res){
    let corpoCaso = req.body;
    let idCaso = req.params.id;

    if(corpoCaso.agente_id){
        erro = validateAgenteId(corpoCaso);
        if(erro){
            return res.status(404).json(erro);
        }
    }

    let resultado = casosRepository.update(idCaso, corpoCaso);

    return validateRepository(resultado, 200, res); 
}

function patchCaso(req, res){
    let corpoCaso = req.body;
    let idCaso = req.params.id;

    if(corpoCaso.agente_id){
        erro = validateAgenteId(corpoCaso);
        if(erro){
            return res.status(404).json(erro);
        }
    }

    let resultado = casosRepository.update(idCaso, corpoCaso);

    return validateRepository(resultado, 200, res); 
}

function deleteCaso(req, res){
    let casoId = req.params.id;

    let resultado = casosRepository.remove(casoId);
    if(resultado === false){
        return res.status(500).send()
    } else if(resultado === 0) {
        res.status(404).json({
            status: 404,
            message: "Caso inexistente",
            errors: {
                id: "Não existe caso com esse id"
            }
        });
    } else {
        return res.status(204).send();
    }
}

function getAgenteCaso(req, res){
    let idCaso = req.params.caso_id;
    let casoEncontrado = null;

    let erro = {
            status: 404,
            message: "Caso inexistente",
            errors: {
                id: "Não existe caso com esse id"
            }
        };

    if(idCaso && !validate(idCaso)){
        return res.status(404).json(erro)
    }else{
        casoEncontrado = casosRepository.findId(idCaso);
    
        if(!casoEncontrado)
            return res.status(404).json(erro);
    }


    let idAgenteResponsavel = casoEncontrado.agente_id;
    if(!idAgenteResponsavel){
         return res.status(404).json({
            status: 404,
            message: "Agente responsável inexistente",
            errors: {
                agente_id: "Caso não possui agente responsável"
            }
        });
    }

    let agenteEncontrado = agentesRepository.findId(casoEncontrado.agente_id);

    return validateRepository(agenteEncontrado, 200, res);
}


function pesquisarCasos(req, res){
    const pesquisa = req.query.q;
    if (!pesquisa){
        return res.status(400).json({
            status: 400,
            message: "Parâmetro de pesquisa não fornecido",
            errors: {
                query: "O parâmetro 'q' é obrigatório para pesquisa"
            }
        })
    }

    let resultadoPesquisa = casosRepository.search(pesquisa)

    return validateRepository(resultadoPesquisa, 200, res)
}

module.exports = {
   getAllCasos,
   getCaso,
   postCaso,
   putCaso,
   patchCaso,
   deleteCaso,
   getAgenteCaso,
   pesquisarCasos
}
