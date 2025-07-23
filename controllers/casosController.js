const casosRepository = require("../repositories/casosRepository");
const agentesRepository = require("../repositories/agentesRepository");
const tratadorErro = require("../utils/errorHandler");
function getAllCasos(req, res) {
    const ordenar = req.query.sort;
    const {id, nome, descricao, status, agente_id} = req.query;
    let filtro = {
        colunaId: id,
        colunaTitulo: nome,
        colunaDescricao: descricao,
        colunaStatus: status,
        colunaAgenteId: agente_id
    }
    const casos = casosRepository.findAll(filtro, ordenar)
    res.json(casos)
}



function getCaso(req, res){
    let idCaso = req.params.id;

    let erro = tratadorErro.errorCasoId(idCaso);

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
        let agenteResponsavel = agentesRepository.findId(corpoCaso.agente_id);
        if(!agenteResponsavel){
            return res.status(404).json({
                "status": 404,
                "message": "Agente não encontrado",
                "errors": [
                    {"agente_id": "Não existe agente com esse id"}
                ]
            })
        }
    }

    

    let validar = casosRepository.criarCaso(corpoCaso.titulo, corpoCaso.descricao, corpoCaso.status, corpoCaso.agente_id);

    if(validar){
        return res.status(201).json({
            "status": 201,
            "message": "Caso criado com sucesso"
        });
    }else {
        return res.status(500).send()
    }
}

function putCaso(req, res){
    let corpoCaso = req.body;
    let idCaso = req.params.id;
    let erro = tratadorErro.errorCasoId(idCaso);
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

    if(corpoCaso.agente_id){
        let agenteResponsavel = agentesRepository.findId(corpoCaso.agente_id);
        if(!agenteResponsavel){
            return res.status(404).json({
                "status": 404,
                "message": "Agente não encontrado",
                "errors": [
                    {"agente_id": "Não existe agente com esse id"}
                ]
            })
        }
    }

    erro = tratadorErro.errorCasoParametros(corpoCaso);
    if(erro){
        return res.status(erro.status).json(erro);
    }

    if(corpoCaso.agente_id){
        let agenteResponsavel = agentesRepository.findId(corpoCaso.agente_id);
        if(!agenteResponsavel){
            return res.status(404).json({
                "status": 404,
                "message": "Agente não encontrado",
                "errors": [
                    {"agente_id": "Não existe agente com esse id"}
                ]
            })
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

    erro = tratadorErro.errorCasoParametrosParciais(corpoCaso);
    if(erro){
        return res.status(erro.status).json(erro)
    }

    casosRepository.atualizarParcialCaso(idCaso, corpoCaso.id, corpoCaso.titulo, corpoCaso.descricao, corpoCaso.status, corpoCaso.agente_id);

    let validar = casosRepository.findId(idCaso);
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
    let erro = tratadorErro.errorCasoId(casoId);
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



module.exports = {
   getAllCasos,
   getCaso,
   postCaso,
   putCaso,
   patchCaso,
   deleteCaso
}