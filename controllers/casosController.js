const casosRepository = require("../repositories/casosRepository");
const agentesRepository = require("../repositories/agentesRepository");
const tratadorErro = require("../utils/errorHandler");
const {validate: validate} = require("uuid");

function errorCasoId(idCaso){
    if(!idCaso){
        return {
            "status": 400,
            "message": "Id inexistente",
            "errors": [
                {"id": "Id inexistente"}
            ]
        }
    }
    if(!validate(idCaso)){
        return {
            "status": 400,
            "message": "Id inválido",
            "errors": [
                {"id": "Formato de id inválido"}
            ]
        }
    }
    return null;
}

function errorAgenteId(corpoCaso){
    let agenteResponsavel = agentesRepository.findId(corpoCaso.agente_id);
    if(!agenteResponsavel){
        return {
            "status": 404,
            "message": "Agente não encontrado",
            "errors": [
                {"agente_id": "Não existe agente com esse id"}
            ]
        }
    }
    return null;

}


function getAllCasos(req, res) {
    const ordenar = req.query.sort;
    const {id, titulo, descricao, status, agente_id} = req.query;
    let filtro = {
        colunaId: id,
        colunaTitulo: titulo,
        colunaDescricao: descricao,
        colunaStatus: status,
        colunaAgenteId: agente_id
    }
    const casos = casosRepository.findAll(filtro, ordenar)
    res.json(casos)
}



function getCaso(req, res){
    let idCaso = req.params.id;

    let erro = errorCasoId(idCaso);

    if(erro){
        return res.status(erro.status).json(erro)
    }

    let casoEncontrado = casosRepository.findId(idCaso);

    if(!casoEncontrado){
        return res.status(404).json({
            "status": 404,
            "message": "Caso não encontrado",
            "errors": [
                {"id": "Não existe caso com esse id"}
            ]
        })
    }


    return res.status(200).json(casoEncontrado)

}

function postCaso(req, res){

    corpoCaso = req.body;
    let erro = tratadorErro.errorCasoParametros(corpoCaso);
    if(erro){
        return res.status(erro.status).json(erro);
    }
    
    if(corpoCaso.agente_id){
        erro = errorAgenteId(corpoCaso);
        if(erro){
            return res.status(erro.status).json(erro);
        }
    }

    

    let validar = casosRepository.criarCaso(corpoCaso.titulo, corpoCaso.descricao, corpoCaso.status, corpoCaso.agente_id);

    if(validar){
        return res.status(201).json(validar);
    }else {
        return res.status(500).send()
    }
}

function putCaso(req, res){
    let corpoCaso = req.body;
    let idCaso = req.params.id;
    let erro = errorCasoId(idCaso);
    if(erro){
        return res.status(erro.status).json(erro);
    }

    let casoEncontrado = casosRepository.findId(idCaso);

    if(!casoEncontrado){
        return res.status(404).json({
            "status": 404,
            "message": "Caso não encontrado",
            "errors": [
                {"id": "Não existe caso com esse id"}
            ]
        });
    }

    if (corpoCaso.id) {
        return res.status(400).json({
            status: 400,
            message: "Não é permitido alterar o campo 'id' do caso",
            errors: [{ "id": "Campo 'id' não pode ser alterado" }]
        });
    }

    erro = tratadorErro.errorCasoParametros(corpoCaso);
    if(erro){
        return res.status(erro.status).json(erro);
    }

    if(corpoCaso.agente_id){
        erro = errorAgenteId(corpoCaso);
        if(erro){
            return res.status(erro.status).json(erro);
        }
    }

    let validar = casosRepository.atualizarCaso(idCaso, corpoCaso.titulo, corpoCaso.descricao, corpoCaso.status, corpoCaso.agente_id);

    if(validar){
        return res.status(200).json({
            "status": 200,
            "message": "Atualização realizada com sucesso"
        });
    } else {
        return res.status(500).send()
    }
}

function patchCaso(req, res){
    let corpoCaso = req.body;
    let idCaso = req.params.id;

    let casoEncontrado = casosRepository.findId(idCaso);

    if(!casoEncontrado){
        return res.status(404).json({
            "status": 404,
            "message": "Caso não encontrado",
            "errors": [
                {"id": "Não existe caso com esse id"}
            ]
        });
    }

    if (corpoCaso.id) {
        return res.status(400).json({
            status: 400,
            message: "Não é permitido alterar o campo 'id' do caso",
            errors: [{ "id": "Campo 'id' não pode ser alterado" }]
        });
    }

    erro = tratadorErro.errorCasoParametrosParciais(corpoCaso);
    if(erro){
        return res.status(erro.status).json(erro)
    }

    if(corpoCaso.agente_id){
        erro = errorAgenteId(corpoCaso);
        if(erro){
            return res.status(erro.status).json(erro);
        }
    }

    let validar = casosRepository.atualizarParcialCaso(idCaso, corpoCaso.titulo, corpoCaso.descricao, corpoCaso.status, corpoCaso.agente_id);
    if(validar){
        return res.status(200).json({
            "status": 200,
            "message": "Atualização parcial realizada com sucesso"
        })
    } else{
        return res.status(500).send()
    }

}

function deleteCaso(req, res){
    let casoId = req.params.id;
    let erro = errorCasoId(casoId);
    if(erro){
        return res.status(erro.status).json(erro);
    }

    let casoEncontrado = casosRepository.findId(casoId);
    
    if(!casoEncontrado){
        return res.status(404).json({
            "status": 404,
            "message": "Caso não encontrado",
            "errors": [
                {"id": "Não existe caso com esse id"}
            ]
        })
    }

    let validar = casosRepository.removerCasoId(casoId);
    if(validar){
        return res.status(204).send();
    } else {
        return res.status(500).send()
    }
}

function getAgenteCaso(req, res){
    let idCaso = req.params.caso_id;

    let erro = errorCasoId(idCaso);

    if(erro){
        return res.status(erro.status).json(erro);
    }

    let casoEncontrado = casosRepository.findId(idCaso);

    if(!casoEncontrado){
        return res.status(404).json({
            "status": 404,
            "message": "Caso não encontrado",
            "errors": [
                {"id": "Não existe caso com esse id"}
            ]
        })
    }

    let idAgenteResponsavel = casoEncontrado.agente_id;
    if(!idAgenteResponsavel){
         return res.status(404).json({
            status: 404,
            message: "Caso não possui agente responsável",
            errors: [{ agente_id: "Caso não possui agente associado" }]
        });
    }

    let agenteEncontrado = agentesRepository.findId(casoEncontrado.agente_id);

    if(!agenteEncontrado){
        return res.status(404).json({
            "status": 404,
            "message": "Agente não encontrado",
            "errors": [
                {"agente_id": "Não existe agente com esse id"}
            ]
        })
    }

    return res.status(200).json(agenteEncontrado);
}


function pesquisarCasos(req, res){
    const pesquisa = req.query.q;
    if (!pesquisa){
        return res.status(400).json({
            "status": 400,
            "message": "Parâmetro de pesquisa não fornecido",
            "errors": [
                {"query": "O parâmetro 'q' é obrigatório para pesquisa"}
            ]
        })
    }

    let resultadoPesquisa = casosRepository.pesquisarCasos(pesquisa)

    res.status(200).json(resultadoPesquisa)

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

