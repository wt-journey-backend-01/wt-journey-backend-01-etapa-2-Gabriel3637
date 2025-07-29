const agentesRepository = require("../repositories/agentesRepository");
const tratadorErro = require("../utils/errorHandler");
const {validate: validate} = require("uuid");

function errorAgenteId(idAgente){
    if(!idAgente){
        return {
            "status": 400,
            "message": "Id inexistente",
            "errors": [
                {"id": "Id inexistente"}
            ]
        }
    }
    if(!validate(idAgente)){
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

function getAllAgentes(req, res) {
    const ordenar = req.query.sort;
    const {id, nome, dataDeIncorporacao, cargo} = req.query;
    let filtro = {
        colunaId: id,
        colunaNome: nome,
        colunaDataDeIncorporacao: dataDeIncorporacao,
        colunaCargo: cargo
    }

    const agentes = agentesRepository.findAll(filtro, ordenar);
    res.json(agentes);
}



function getAgente(req, res){
    let idAgente = req.params.id;

    let erro = errorAgenteId(idAgente);

    if(erro){
        return res.status(erro.status).json(erro)
    }

    let agenteEncontrado = agentesRepository.findId(idAgente);

    if(!agenteEncontrado){
        return res.status(404).json({
            "status": 404,
            "message": "Agente não encontrado",
            "errors": [
                {"id": "Não existe agente com esse id"}
            ]
        })
    }


    return res.status(200).json(agenteEncontrado)

}

function postAgente(req, res){

    corpoAgente = req.body;
    let erro = tratadorErro.errorAgenteParametros(corpoAgente);
    if(erro){
        return res.status(erro.status).json(erro);
    }
    
    let validar = agentesRepository.criarAgente(corpoAgente.nome, corpoAgente.dataDeIncorporacao, corpoAgente.cargo);
    if(validar){
        return res.status(201).json(validar);
    } else {
        return res.status(500).send();
    }
}

function putAgente(req, res){
    let corpoAgente = req.body;
    let idAgente = req.params.id;
    let erro = errorAgenteId(idAgente);
    if(erro){
        return res.status(erro.status).json(erro);
    }
    agenteEncontrado = agentesRepository.findId(idAgente);
    if(!agenteEncontrado){
        return res.status(404).json({
            "status": 404,
            "message": "Agente não encontrado",
            "errors": [
                {"id": "Não existe agente com esse id"}
            ]
        });
    }

    if (corpoAgente.id) {
        return res.status(400).json({
            status: 400,
            message: "Não é permitido alterar o campo 'id' do agente",
            errors: [{ "id": "Campo 'id' não pode ser alterado" }]
        });
    }

    erro = tratadorErro.errorAgenteParametros(corpoAgente);
    if(erro){
        return res.status(erro.status).json(erro);
    }

    let validar = agentesRepository.atualizarAgente(idAgente, corpoAgente.nome, corpoAgente.dataDeIncorporacao, corpoAgente.cargo);

    if(validar){
        return res.status(200).json({
            "status": 200,
            "message": "Atualização realizada com sucesso"
        });
    } else {
        return res.status(500).send()
    }
}

function patchAgente(req, res){
    let corpoAgente = req.body;
    let idAgente = req.params.id;

    let erro = errorAgenteId(idAgente);
    if(erro){
        return res.status(erro.status).json(erro);
    }

    if (corpoAgente.id) {
        return res.status(400).json({
            status: 400,
            message: "Não é permitido alterar o campo 'id' do agente",
            errors: [{ "id": "Campo 'id' não pode ser alterado" }]
        });
    }

    erro = tratadorErro.errorAgenteParametrosParciais(corpoAgente);
    if(erro){
        return res.status(erro.status).json(erro)
    }

    let validar = agentesRepository.atualizarParcialAgente(idAgente, corpoAgente.nome, corpoAgente.dataDeIncorporacao, corpoAgente.cargo);

    if(validar){
        return res.status(200).json({
            "status": 200,
            "message": "Atualização parcial realizada com sucesso"
        })
    }else {
        return res.status(500).send()
    }
}

function deleteAgente(req, res){
    let agenteId = req.params.id;
    let erro = errorAgenteId(agenteId);
    if(erro){
        return res.status(erro.status).json(erro);
    }

    let agenteEncontrado = agentesRepository.findId(agenteId);
    
    if(!agenteEncontrado){
        return res.status(404).json({
            "status": 404,
            "message": "Agente não encontrado",
            "errors": [
                {"id": "Não existe agente com esse id"}
            ]
        })
    }

    
    let validar = agentesRepository.removerAgenteId(agenteId);
    if(validar){
        return res.status(204).send();
    } else {
        return res.status(500).send()
    }
}



module.exports = {
   getAllAgentes,
   getAgente,
   postAgente,
   putAgente,
   patchAgente,
   deleteAgente
}