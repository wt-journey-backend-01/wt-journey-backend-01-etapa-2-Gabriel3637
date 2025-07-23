const casosRepository = require("../repositories/casosRepository");
const tratadorErro = require("../utils/errorHandler");
function getAllCasos(req, res) {
    const ordenar = req.query.sort;
    const {id, nome, dataDeIncorporacao, cargo} = req.query;
    let filtro = {
        colunaId: id,
        colunaNome: nome,
        colunaDataDeIncorporacao: dataDeIncorporacao,
        colunaCargo: cargo
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
    
    casosRepository.criarCaso(corpoCaso.id, corpoCaso.titulo, corpoCaso.descricao, corpoCaso.status, corpoCaso.agente_id);

    return res.status(201).json({
        "status": 201,
        "message": "Caso criado com sucesso"
    });
}

function putCaso(req, res){
    let corpoCaso = req.body;
    let idCaso = req.params.id;
    let erro = tratadorErro.errorCasoId(idCaso);
    if(erro){
        return res.status(erro.status).json(erro);
    }
    casoEncontrado = casosRepository.findId(idCaso);
    if(!casoEncontrado){
        return res.status(404).json({
            "status": 404,
            "message": "Caso não encontrado",
            "errors": [
                {"id": "Não existe caso com esse id"}
            ]
        });
    }
    erro = tratadorErro.errorCasoParametros(corpoCaso);
    if(erro){
        return res.status(erro.status).json(erro);
    }

    casosRepository.atualizarCaso(idCaso, corpoCaso.id, corpoCaso.titulo, corpoCaso.descricao, corpoCaso.status, corpoCaso.agente_id);

    return res.status(200).json({
        "status": 200,
        "message": "Atualização realizada com sucesso"
    });
}

function patchCaso(req, res){
    let corpoCaso = req.body;
    let idCaso = req.params.id;

    erro = tratadorErro.errorCasoParametrosParciais(corpoCaso);
    if(erro){
        return res.status(erro.status).json(erro)
    }

    casosRepository.atualizarParcialCaso(idCaso, corpoCaso.id, corpoCaso.titulo, corpoCaso.descricao, corpoCaso.status, corpoCaso.agente_id);

    return res.status(200).json({
        "status": 200,
        "message": "Atualização parcial realizada com sucesso"
    })
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

    casosRepository.removerCasoId(casoId);
    console.log("Teste");
    return res.status(204).json({
        "status": 204,
        "message": "Caso removido com sucesso"
    });
}



module.exports = {
   getAllCasos,
   getCaso,
   postCaso,
   putCaso,
   patchCaso,
   deleteCaso
}