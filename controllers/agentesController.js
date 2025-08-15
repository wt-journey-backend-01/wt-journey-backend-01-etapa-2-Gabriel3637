const agentesRepository = require("../repositories/agentesRepository");

function validateRepository(repositoryResponse, statusCode, res){
    if(repositoryResponse === null){
        return res.status(404).json({
            status: 404,
            message: "Agente inexistente",
            errors: {
                id: "Não existe agente com esse id"
            }
        })
    } else if(repositoryResponse === false)
        return res.status(500).send()
    else{
        return res.status(statusCode).json(repositoryResponse);
    }
}

function getAllAgentes(req, res) {
    let ordenar = req.query.sort;
    const {id, nome, dataDeIncorporacao, cargo} = req.query
    const filtro = {}
    let direcao = null;

    if(id)
        filtro.id = id;
    if(nome)
        filtro.nome = nome;
    if(dataDeIncorporacao)
        filtro.dataDeIncorporacao = dataDeIncorporacao;
    if(cargo)
        filtro.cargo = cargo;
    if(ordenar){
        if(ordenar[0] == '-'){
            ordenar = ordenar.slice(1);
            direcao = 'DESC';
        } else {
            direcao = 'ASC'
        }
    }

    const agentes = agentesRepository.read(filtro, ordenar, direcao);
    return validateRepository(agentes, 200, res)
}

function getAgente(req, res){
    let idAgente = req.params.id;

    let agenteEncontrado = agentesRepository.findId(idAgente);

    return validateRepository(agenteEncontrado, 200, res)
}

function postAgente(req, res){
    corpoAgente = req.body;
    
    let resultado = agentesRepository.create(corpoAgente);

    return validateRepository(resultado, 201, res);
}

function putAgente(req, res){
    let corpoAgente = req.body;
    let idAgente = req.params.id;


    let resultado = agentesRepository.update(idAgente, corpoAgente);

    return validateRepository(resultado, 200, res);
}

function patchAgente(req, res){
    let corpoAgente = req.body;
    let idAgente = req.params.id;

    let resultado = agentesRepository.update(idAgente, corpoAgente);

    validateRepository(resultado, 200, res)
}

function deleteAgente(req, res){
    let agenteId = req.params.id;

    
    let resultado = agentesRepository.remove(agenteId);
    if(resultado === false){
        return res.status(500).send()
    } else if(resultado === 0) {
        res.status(404).json({
            status: 404,
            message: "Agente inexistente",
            errors: {
                id: "Não existe agente com esse id"
            }
        });
    } else {
        return res.status(204).send();
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